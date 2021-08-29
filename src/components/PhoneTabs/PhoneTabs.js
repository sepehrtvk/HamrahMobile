import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import NewTab from "./Tabs/NewTab";
const PhoneTabs = () => {
  return (
    <Tabs
      defaultActiveKey="خرید"
      id="uncontrolled-tab-example"
      className="mb-3 m-5"
    >
      <Tab eventKey="خرید" title="خرید">
        <NewTab
          select1text="انتخاب سازنده و مدل"
          select2text="انتخاب سال"
          buttonText="ثبت درخواست"
          text="خرید و فروش"
        />
      </Tab>
      <Tab eventKey="فروش" title="فروش"></Tab>
      <Tab eventKey="قیمت" title="قیمت"></Tab>
    </Tabs>
  );
};

export default PhoneTabs;
