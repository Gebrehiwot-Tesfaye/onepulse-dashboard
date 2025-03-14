import React from "react";
import SubscriberAnalysis from "./SubscriberAnalysis";
import TopPerformingCampaigns from "./TopPerformingCampaigns";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 bg-gray-100">
      <Navbar />
      <SubscriberAnalysis />
      <TopPerformingCampaigns />
    </div>
  );
};

export default Dashboard;
