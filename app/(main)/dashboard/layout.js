import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <h1 className="text-6xl font-bold mb-5 bg-gradient-to-br from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Dashboard
      </h1>
      {/* {Dashboard Page} */}
      <Suspense
        fallback={
          <div className="mt-4 w-full">
            <BarLoader width="100%" color="#9333ea" />
          </div>
        }
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
