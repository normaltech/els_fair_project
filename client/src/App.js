import Login from './component/loginForm/loginformbox/Login';
import Signup from './component/signup/Signup';
import Mainfirst from './component/mainfirst/Mainfirst';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectBooth from './component/selectbooth/SelectBooth';
import Spec from './component/specifications/Spec';

function App() {
  return (
    // <div className="App">
    //   <Signup/>
    // </div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/reservation">
          <SelectBooth/>
        </Route>
        <Route path="/mainfirst">
          <Mainfirst/>
        </Route>
        <Route path="/selection">
          <Spec/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;