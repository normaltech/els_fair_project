import Login from './component/loginForm/loginformbox/Login';
import Signup from './component/signup/Signup';
import Mainfirst from './component/mainfirst/Mainfirst';
import Find from './component/find/Find';
import Confirm from './component/confirm/Confirm';
import ChangePw from './component/changepwtofindemail/ChangePw';
import Success from './component/success/Success';
import SuccessSignIn from './component/successsignin/SuccessSignIn';
import ChangePassword from './component/changepassword/ChangePassword';
import ChangeNumber from './component/changenumber/ChangeNumber';
import ChangeBussinessNumber from './component/changebussinessnumber/ChangeBussinessNumber';
import Withdraw from './component/withdraw/Withdraw';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SelectBooth from './component/selectbooth/SelectBooth';
import Spec from './component/specifications/Spec';
import UserInfo from './component/userinfo/UserInfo';
import ReservationList from './component/reservationlist/ReservationList';

// 메니저페이지 테스트용
import ManagerPage from './ManagerPage/Home';

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
        <Route path="/selection">
          <SelectBooth/>
        </Route>
        <Route path="/mainpage">
          <Mainfirst/>
        </Route>
        <Route path="/reservation">
          <Spec/>
        </Route>
        <Route path="/findIdPw">
          <Find/>
        </Route>
        <Route path="/confirm">
          <Confirm/>
        </Route>
        {/* 아래 changePw는 Web_find_email_password */}
        <Route path="/changePw">
          <ChangePw/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/successSignIn">
          <SuccessSignIn/>
        </Route>
        {/* 아래 changePassword는 회원정보에서의 비밀번호 변경인 Web_change_password */}
        <Route path="/changePassword"> 
          <ChangePassword/>
        </Route>
        <Route path="/changeNumber">
          <ChangeNumber/>
        </Route>
        <Route path="/changeBusinessNumber">
          <ChangeBussinessNumber/>
        </Route>
        <Route path="/withdraw">
          <Withdraw/>
        </Route>
        <Route path="/userinfo">
          <UserInfo/>
        </Route>
        <Route path="/reservationlist">
          <ReservationList/>
        </Route>

        {/* 매니저페이지 테스트용 */}
        <Route path="/managerpage">
          <ManagerPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
