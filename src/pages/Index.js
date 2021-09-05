import React from "react";
import MainHeader from "../components/Header/MainHeader";
import TabsSection from "../components/index-page/PhoneTabs/TabsSection";
import IconSection from "../components/index-page/IconSection/IconSection";
import LastPhones from "../components/index-page/LastPhonesSection/LastPhones";
const Index = () => {
  return (
    <>
      <MainHeader />
      <TabsSection />
      <IconSection />
      <LastPhones />
    </>
  );
};

export default Index;
