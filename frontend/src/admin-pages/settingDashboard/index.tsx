"use client";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import { ModulesWiseUserData } from "../../data/chart";
import { useState } from "react";

const SettingDashboard = () => {
  const [data, setData] = useState(ModulesWiseUserData);
  const toggleVisibility = (name: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name
          ? { ...item, users: item.users === 0 ? 38 : 0 } // Toggle users count
          : item
      )
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="grid grid-cols-12 gap-6 max-w-3xl mx-auto mb-6">
        {/* User Wise */}
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <a href="/admin/Settings/user">
                  <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                    Users
                  </div>
                </a>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>Active</div>
                  </a>
                  <div>38</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>InActive</div>
                  </a>
                  <div>0</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/user">
                    <div>Total</div>
                  </a>
                  <div>38</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role Wise */}
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <a href="/admin/Settings/roles">
                  <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                    Roles
                  </div>
                </a>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>Active</div>
                  </a>
                  <div>4</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>InActive</div>
                  </a>
                  <div>0</div>
                </div>
                <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <a href="/admin/Settings/roles">
                    <div>Total</div>
                  </a>
                  <div>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 max-w-full mx-auto mb-6">
        <div className="hidden xl:block flex flex-col col-span-full xl:col-span-2">
          {" "}
        </div>

        {/* Modules Wise User */}
        <div className="flex flex-col col-span-full xl:col-span-4 bg-white shadow-lg rounded-md">
          <div className="text-center item-center block">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full text-center">
                <div className="p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
                  <div>Modules Wise User </div>
                </div>
                <div className="p-3 text-gray-700 uppercase font-bold text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div className="text-gray-400"> Module Name</div>
                  <div className="text-gray-400"> Users </div>
                </div>
                {ModulesWiseUserData.map((item) => (
                  <div className="p-3 text-gray-700 uppercase text-xs flex justify-between border-b border-neutral-200 last:border-b-0">
                  <div> {item.name}</div>
                  <div> {item.users}</div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modules Wise User Report */}
        <div className="flex flex-col col-span-full xl:col-span-4">
          <div className="w-full bg-white shadow-lg rounded-md h-full">
            <div className=" p-3 font-semibold text-xl text-gray-700 border-b-2 border-neutral-200">
              <div className="sm:flex sm:justify-between sm:items-center">
                <div className="font-semibold">Module Wise User Report</div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div className="flex flex-wrap p-3  justify-center item-center text-center">
              <div style={{ width: "100%", height: "250px" }}>
                {" "}
                {/* // Ensure height is set */}
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ModulesWiseUserData}
                      dataKey="users"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90} 
                    >
                    {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.users === 0 ? "" : entry.color} // Show grey for hidden slices
                    />
                  ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="px-3 pt-2 pb-3">
              <ul className="flex flex-wrap justify-center">
                {ModulesWiseUserData.map((item) => {
                  return (
                    <li className="margin: 0.25rem" key={item.name}>
                       <button
                className={`btn-xs border shadow flex items-center px-3 py-1 rounded ${
                  item.visible ? "bg-white" : "bg-gray-300 opacity-50"
                }`}
                type="button"
                onClick={() => toggleVisibility(item.name)}
              >
                        <span
                          className="block w-2 h-2 bg-gray-300 rounded-sm mr-2"
                          style={{ background: item.color }}
                        ></span>
                        <span className="flex items-center">{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingDashboard;
