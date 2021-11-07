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

function Home() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/managerpage">
                    <ManagerMain />
                </Route>
                <Route exact path="/managerpage/userManagement">
                    <UserManagement />
                </Route>
                <Route exact path="/managerpage/eslManagement">
                    <EslManagement />
                </Route>
                <Route exact path="/managerpage/boothManagement">
                    <BoothManagement />
                </Route>
                <Route exact path="/managerpage/notice">
                    <Notice />
                </Route>
            </Switch>
        </Router>
    )
}

export default Home
