import React from "react";
import PhoneTabs from "./PhoneTabs";

const TabsSection = () => {
  return (
    <>
      <h4 className="my-5 text-center">خرید و فروش بی دردسر موبایل</h4>
      <div className="container text-center my-5 w-50 border rounded-3 shadow-lg">
        <PhoneTabs />
      </div>
    </>
  );
};

export default TabsSection;
