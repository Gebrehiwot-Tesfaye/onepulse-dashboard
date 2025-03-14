import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { MessageCircle, CheckCircle, XCircle, Clock } from "lucide-react";

const data = [
  { month: "Jan", active: 4000, inactive: 2400 },
  { month: "Feb", active: 3000, inactive: 1398 },
  { month: "Mar", active: 2000, inactive: 9800 },
  { month: "Apr", active: 2780, inactive: 3908 },
  { month: "May", active: 1890, inactive: 4800 },
  { month: "Jun", active: 2390, inactive: 3800 },
  { month: "Jul", active: 3490, inactive: 4300 },
];

const pieData = [
  { name: "Delivered", value: 2400 },
  { name: "Failed", value: 2000 },
  { name: "Queued", value: 600 },
];

const COLORS = ["#8297fc", "#070692", "#c7cdff"];

const SubscriberAnalysis = () => {
  return (
    <>
      <div className="flex  justify-between items-center mt-4">
        <div className="flex flex-1 justify-between space-x-4">
          <div className="flex items-center bg-[#fff] shadow-md p-4 w-1/4 rounded-md">
            <MessageCircle className="text-blue-600" />
            <div className="ml-2">
              <span className="font-bold">All SMS</span>
              <div>8400</div>
            </div>
          </div>
          <div className="flex   items-center bg-[#fff] w-1/4  shadow-md p-4 rounded-md">
            <CheckCircle className="text-green-600" />
            <div className="ml-2">
              <span className="font-bold">Delivered SMS</span>
              <div>7000</div>
            </div>
          </div>
          <div className="flex items-center bg-[#fff] w-1/4  shadow-md p-4 rounded-md">
            <XCircle className="text-red-600" />
            <div className="ml-2">
              <span className="font-bold">Failed SMS</span>
              <div>400</div>
            </div>
          </div>
          <div className="flex items-center bg-[#fff] w-1/4  shadow-md p-4 rounded-md">
            <Clock className="text-yellow-600" />
            <div className="ml-2">
              <span className="font-bold">Queue SMS</span>
              <div>1000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4   space-x-2">
        <div className="flex-1 p-4 rounded-2xl bg-[#fff]">
          <h3 className="text-lg font-bold">Subscriber Analysis</h3>
          <div className="flex items-center m-2">
            <span className="bg-blue-600 w-3 h-3 rounded-full mr-2"></span>
            <span className="font-bold">Active</span>
            <span className="bg-yellow-600 w-3 h-3 rounded-full mx-2"></span>
            <span className="font-bold">Inactive</span>
          </div>

          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="active" stroke="#d9b101" />
            <Line type="monotone" dataKey="inactive" stroke="#120e64" />
          </LineChart>
        </div>
        <div className="flex-none w-1/3 ml-4 rounded-2xl bg-[#fff] p-4 flex flex-col items-center">
          <h3 className="text-lg font-bold">Subscriber Analysis</h3>
          <h6 className="mb-2">Weekly subscriber analysis</h6>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="flex  m-2">
            {pieData.map((entry, index) => (
              <div key={index} className="flex mt-4  ml-2 items-center">
                <span
                  className="w-3 h-3 "
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                <span className="ml-3">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriberAnalysis;
