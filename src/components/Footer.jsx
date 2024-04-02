import React from "react";

export default function Footer() {
  return (
    <div className="lg:h-28 border-t-2 border-blue-500 lg:px-20 lg:py-6 flex flex-col justify-between">
      <div className="h-1/2">
        <h1 className="font-bold lg:text-xl">ASA AMERTA</h1>
      </div>
      <hr className="lg:border-2 border-gray-600" />
      <div className="h-1/2">
        <h1 className="text-sm">CompanyName @ 202X. All rights reserved.</h1>
        <div></div>
      </div>
    </div>
  );
}
