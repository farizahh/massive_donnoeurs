import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Darah from "./page/Darah";
import User from "./page/User";
import Even from "./page/Even";
import Delete from "./component/Delete";
import Editd from "./page/Editd";
import InputE from "./page/InputE";
import Editu from "./page/Editu";
import Signin from "./page/SigninA";
import Signup from "./page/SignupA";
import Reset from "./page/ResetA";
import Forgot from "./page/Forgot";
import Checkemail from "./component/Checkemail";
import ResetModals from "./component/ResetModals";
import SavedModals from "./component/SavedModals";
import Tambahuser from "./component/Tambahuser";
import Edite from "./page/Edite";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} /> {/* Route default */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/darah" element={<Darah />} />
          <Route path="/user" element={<User />} />
          <Route path="/event" element={<Even />} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/editd" element={<Editd />} />
          <Route path="/inpute" element={<InputE />} />
          <Route path="/editu" element={<Editu />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/checkemail" element={<Checkemail />} />
          <Route path="/resetModals" element={<ResetModals />} />
          <Route path="/saved" element={<SavedModals />} />
          <Route path="/Tambahuser" element={<Tambahuser />} />
          <Route path="/edite" element={<Edite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
