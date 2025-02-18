"use client";

import { redirect, usePathname } from "next/navigation";

const DashboardPage = () => {
  const pathname = usePathname();
  if (pathname === "/") {
    redirect("/admin/dashboard");
  }
  return <div>Welcome to Dashboard</div>;
};

export default DashboardPage;
