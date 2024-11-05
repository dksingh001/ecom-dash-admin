import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "./Header";

const UpdateP = () => {
  return (
    <div className="uptoA">
      <Header />
      <div className="upCA">
        <Dashboard />
        <div>
          <h1> Update product</h1>
        </div>
      </div>
    </div>
  );
};

export default UpdateP;
