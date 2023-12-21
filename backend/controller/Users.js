import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../database/Database.js';

export const getUsers = async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM db_user');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const Register = async (req, res) => {
  const { name, email, phone_number, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({
      msg: 'Password dan Confirm Password Tidak Cocok',
    });
  }

  const [user] = await db.query('SELECT * FROM db_user WHERE email = ?', [email]);
  if (user.length > 0) {
    return res.status(404).json({ msg: 'email sudah ada! Ganti email!' });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await db.query('INSERT INTO db_user (name, email, phone_number, password) VALUES (?, ?, ?, ?)', [
      name,
      email,
      phone_number,
      hashPassword,
    ]);
    res.json({ msg: 'Register Berhasil' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const Login = async (req, res) => {
  try {
    const [user] = await db.query('SELECT * FROM db_user WHERE email = ?', [req.body.email]);

    if (user.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) {
      return res.status(400).json({ msg: 'Wrong Password' });
    }

    const userId = user[0].id;
    const name = user[0].name;
    const lastname = user[0].lastname;
    const email = user[0].email;
    const phone_number = user[0].phone_number;
    const blood_type = user[0].blood_type;
    const gender = user[0].gender;
    const address = user[0].address;
    const date_of_birth = user[0].date_of_birth;


    const accessToken = jwt.sign(
      { userId, name,lastname, email, phone_number, blood_type, gender, address, date_of_birth },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );
    const refreshToken = jwt.sign(
      { userId, name,lastname, email, phone_number, blood_type, gender, address, date_of_birth},
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    await db.query('UPDATE db_user SET refresh_token = ? WHERE id = ?', [refreshToken, userId]);

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
        // secure: true ## for https
    })

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: error.message });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(204);
  const [user] = await db.query('SELECT * FROM db_user WHERE refresh_token = ?', [refreshToken]);

  if (!user[0]) {
    return res.sendStatus(204);
  }

  const userId = user[0].id;

  await db.query('UPDATE db_user SET refresh_token = NULL WHERE id = ?', [userId]);
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

export const Me = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(204);
    const [user] = await db.query('SELECT * FROM db_user WHERE refresh_token = ?', [refreshToken]);

    if (!user[0]) {
      return res.sendStatus(204);
    }

    const [response] = await db.query('SELECT * FROM db_user WHERE id = ?', [user[0].id]);
    res.json(response[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const updateDataUsers = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(204).json({ msg: 'No Refresh Token provided' });

    const users = await db.query('SELECT * FROM db_user WHERE refresh_token = ?', [refreshToken]);

    if (!users[0][0]) {
      return res.status(204).json({ msg: 'User not found' });
    }

    const userId = users[0][0].id; 
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const blood_type = req.body.blood_type;
    const gender = req.body.gender;
    const address = req.body.address;
    const date_of_birth = req.body.date_of_birth;

    try {
      await db.query('UPDATE db_user SET name = ?, lastname = ?,  phone_number = ?, blood_type = ?, gender = ?, address=?, date_of_birth = ? WHERE id = ?', [
        name,
        lastname,
        phone_number,
        blood_type,
        gender,
        address,
        date_of_birth,
        userId
      ]);

      res.status(200).json({
        msg: 'User data has been updated',
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

// Endpoint untuk menerima data dari formulir
export const isiformulir = async (req, res) => {
  try {
    const {
      nama,
      alamat,
      kabupaten,
      nomor_hp,
      jumlah_pendonor,
      jenis_donor,
      golongan_darah,
      rhesus,
      berat_badan,
      tinggi_badan
    } = req.body;

    // Lakukan penyesuaian query untuk menyimpan data ke tabel datadarah
    await db.query(
      'INSERT INTO datadarah (nama, alamat, kabupaten, nomor_hp, jumlah_pendonor, jenis_donor, golongan_darah, rhesus, berat_badan, tinggi_badan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        nama,
        alamat,
        kabupaten,
        nomor_hp,
        jumlah_pendonor,
        jenis_donor,
        golongan_darah,
        rhesus,
        berat_badan,
        tinggi_badan
      ]
    );

    res.status(200).json({
      msg: 'Data berhasil disimpan ke tabel datadarah',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
