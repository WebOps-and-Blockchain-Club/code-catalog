import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import "./dashboard.css";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="container">
      <h1 className="heading">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
