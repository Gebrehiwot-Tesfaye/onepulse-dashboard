import React, { useState } from "react";
import { Filter } from "lucide-react"; // Import the filter icon

const initialCampaigns = [
  {
    name: "Campaign 1",
    status: "Ongoing",
    successRate: "54%",
    engagement: "78%",
    budget: "12,000",
  },
  {
    name: "Campaign 2",
    status: "Ongoing",
    successRate: "60%",
    engagement: "80%",
    budget: "15,000",
  },
  {
    name: "Campaign 3",
    status: "Completed",
    successRate: "70%",
    engagement: "85%",
    budget: "10,000",
  },
  {
    name: "Campaign 4",
    status: "Completed",
    successRate: "90%",
    engagement: "95%",
    budget: "20,000",
  },
  {
    name: "Campaign 5",
    status: "Completed",
    successRate: "75%",
    engagement: "88%",
    budget: "18,000",
  },
];

const TopPerformingCampaigns = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [sortOrder, setSortOrder] = useState({ column: "", direction: "asc" });

  const handleSort = (column) => {
    const direction = sortOrder.direction === "asc" ? "desc" : "asc";
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (column === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return direction === "asc"
          ? a[column] - b[column]
          : b[column] - a[column];
      }
    });
    setCampaigns(sortedCampaigns);
    setSortOrder({ column, direction });
  };

  return (
    <div className="bg-[#fff] shadow-md p-4 rounded-md mt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Top Performing Campaigns</h3>
        <div className="flex items-center">
          <Filter className="text-gray-600 cursor-pointer" />
          <span className="ml-1 text-gray-600">Filter</span>
        </div>
      </div>
      <table className="min-w-full mt-2">
        <thead>
          <tr>
            <th
              className="border-b border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Campaign Name{" "}
              {sortOrder.column === "name"
                ? sortOrder.direction === "asc"
                  ? "个"
                  : "↓ "
                : "↓ "}
            </th>
            <th
              className="border-b border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status{" "}
              {sortOrder.column === "status"
                ? sortOrder.direction === "asc"
                  ? "个"
                  : "↓"
                : "↓"}
            </th>
            <th
              className="border-b border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("successRate")}
            >
              Success Rate{" "}
              {sortOrder.column === "successRate"
                ? sortOrder.direction === "asc"
                  ? "个"
                  : "↓"
                : "↓"}
            </th>
            <th
              className="border-b border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("engagement")}
            >
              Engagement{" "}
              {sortOrder.column === "engagement"
                ? sortOrder.direction === "asc"
                  ? "个"
                  : "↓"
                : "↓"}
            </th>
            <th
              className="border-b border-gray-300 px-4 py-2 cursor-pointer"
              onClick={() => handleSort("budget")}
            >
              Budget{" "}
              {sortOrder.column === "budget"
                ? sortOrder.direction === "asc"
                  ? "个"
                  : "↓"
                : "↓"}
            </th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b border-gray-300 px-4 py-2">
                {campaign.name}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {campaign.status}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {campaign.successRate}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {campaign.engagement}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {campaign.budget}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformingCampaigns;
