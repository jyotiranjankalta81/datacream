import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
// import HomeContainer from "./containers/GamePlayedContainers";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from './Login';
function App() {
  return (
    <div>
      <div className="App">
        {/* <HomeContainer /> */}
        

      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={User} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
