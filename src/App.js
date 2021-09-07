import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router";
import AuthForm from "./components/Auth/AuthForm";
import PhonePrice from "./components/PhonePrice/PhonePrice";
import PhoneCheck from "./components/PhoneCheck/PhoneCheck";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route path="/phonePrice">
            <PhonePrice />
          </Route>
          <Route path="/phoneCheck">
            <PhoneCheck />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
