import React from 'react'
import Navbar from './Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import ManagerMain from './ManagerMain';
  import UserManagement from './UserManagement';
  import EslManagement from './EslManagement';
  import BoothManagement from './BoothManagement';
  import Notice from './Notice';

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
