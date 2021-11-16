import React from 'react'
import Navbar from './NavBar/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import ManagerMain from './manager_component/Mmain/ManagerMain';
  import UserManagement from './manager_component/Muser/UserManagement';
  import EslManagement from './manager_component/Mesl/EslManagement';
  import BoothManagement from './manager_component/Mbooth/BoothManagement';
  import Notice from './manager_component/Mnotice/Notice';
  import LoginManagement from './manager_component/MLogin/LoginManagement';

function Home() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/managerpage">
                    <Navbar />
                    <ManagerMain />
                </Route>
                <Route exact path="/managerpage/userManagement">
                    <Navbar />
                    <UserManagement />
                </Route>
                <Route exact path="/managerpage/eslManagement">
                    <Navbar />
                    <EslManagement />
                </Route>
                <Route exact path="/managerpage/boothManagement">
                    <Navbar />
                    <BoothManagement />
                </Route>
                <Route exact path="/managerpage/notice">
                    <Navbar />
                    <Notice />
                </Route>
                <Route exact path="/managerpage/loginManagement">
                    <LoginManagement />
                </Route>
            </Switch>
        </Router>
    )
}

export default Home
