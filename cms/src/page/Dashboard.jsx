import React from "react";
import Sidebar from "../component/sidebar";
import Utama from "../component/Utama";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="ml-72 mt-20">
          <Utama />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
