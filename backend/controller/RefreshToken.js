import jwt from 'jsonwebtoken';
import db from '../database/Database.js';

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json({ status: false, message: 'Refresh token is required' });

    const [user] = await db.query('SELECT * FROM db_user WHERE refresh_token = ?', [refreshToken]);

    if (!user[0]) {
      return res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
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
        {
          expiresIn: '1d',
        }
      );

      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
