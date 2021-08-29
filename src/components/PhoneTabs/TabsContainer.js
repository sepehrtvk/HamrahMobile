import React from "react";
import PhoneTabs from "./PhoneTabs";

const TabsContainer = () => {
  return (
    <div className="container text-center my-5 w-50 border rounded-3 shadow-lg">
      <h4 className="my-4" >خرید و فروش بی دردسر موبایل</h4>
      <PhoneTabs />
    </div>
  );
};

export default TabsContainer;
