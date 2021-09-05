import "./App.css";
import Index from "./pages/Index";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/auth" exact>
            <AuthForm />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
