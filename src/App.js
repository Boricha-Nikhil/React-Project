import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import PrivateRouter from "./privateRouter"
import PublicRouter from "./publicRouter"
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'

function App() {
  return (
    <div className="container">
      <Switch>
        <PublicRouter path="/" exact component={Login} />
        <PublicRouter path="/login" exact component={Login} />
        <PublicRouter path="/register" exact component={Register} />
        <Layout>
          <PrivateRouter path="/dashboard" exact component={Home} />
        </Layout>
      </Switch>
    </div>
  );  
}

export default App;
