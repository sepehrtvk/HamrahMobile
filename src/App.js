import "./App.css";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader";
import IconSection from "./components/IconSection/IconSection";
import TabsSection from "./components/PhoneTabs/TabsSection";
import LastPhones from "./components/LastPhonesSection/LastPhones";

function App() {
  return (
    <>
      <Header />
      <MainHeader />
      <TabsSection />
      <IconSection />
      <LastPhones />
    </>
  );
}

export default App;
