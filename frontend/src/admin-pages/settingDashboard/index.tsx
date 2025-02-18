"use client";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { ModuleWiseUserData } from "../../data/chart";
import { useState } from "react";

const SettingDashboard = () => {
  const [data, setData] = useState(ModuleWiseUserData);
  const toggleVisibility = (name: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name
          ? { ...item, users: item.users === 0 ? 38 : 0 } // Toggle users count
          : item,
      ),
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* First row with Users and Roles cards */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Users Card */}
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Users</h2>
            <div className="divide-y divide-slate-200">
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">ACTIVE</div>
                <div className="text-sm font-medium text-slate-800">38</div>
              </div>
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">INACTIVE</div>
                <div className="text-sm font-medium text-slate-800">0</div>
              </div>
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">TOTAL</div>
                <div className="text-sm font-medium text-slate-800">38</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Card */}
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">Roles</h2>
            <div className="divide-y divide-slate-200">
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">ACTIVE</div>
                <div className="text-sm font-medium text-slate-800">4</div>
              </div>
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">INACTIVE</div>
                <div className="text-sm font-medium text-slate-800">0</div>
              </div>
              <div className="flex justify-between py-3">
                <div className="text-sm text-slate-600">TOTAL</div>
                <div className="text-sm font-medium text-slate-800">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row with Module tables and chart */}
      <div className="grid grid-cols-12 gap-6">
        {/* Modules Wise User Table */}
        <div className="flex flex-col col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Modules Wise User
            </h2>
            <div className="divide-y divide-slate-200">
              <div className="flex justify-between py-3 font-semibold">
                <div className="text-sm text-slate-500">MODULE NAME</div>
                <div className="text-sm text-slate-500">USERS</div>
              </div>
              {ModuleWiseUserData.map((item) => (
                <div key={item.name} className="flex justify-between py-3">
                  <div className="text-sm text-slate-600">{item.name}</div>
                  <div className="text-sm font-medium text-slate-800">
                    {item.users}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Wise User Report Chart */}
        <div className="flex flex-col col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <div className="px-5 pt-5">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              Module Wise User Report
            </h2>
            <div className="flex justify-center" style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="users"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.users === 0 ? "#f5f5f5" : entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="px-3 pt-2 pb-3">
              <div className="flex flex-wrap justify-center gap-2">
                {ModuleWiseUserData.map((item) => (
                  <button
                    key={item.name}
                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded border shadow-sm"
                    onClick={() => toggleVisibility(item.name)}
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingDashboard;
