import React from "react";
import UserHeader from "./UserHeader/UserHeader";
<<<<<<< Updated upstream
import LoginHeader from "./LoginHeader/LoginHeader";
import { connect } from "react-redux";
import { isAuthenticatedSelector } from "../../redux/auth/authSelectors";

const Header = ({ isAuth }) => {
  return <>{isAuth ? <UserHeader /> : <LoginHeader />}</>;
};
const mapStateToProps = (state) => ({
  isAuth: isAuthenticatedSelector(state),
});
export default connect(mapStateToProps)(Header);
=======
import isAuth from "../../auth/"
export default function Header() {
  return (
    <header>
      {true ? <LoginHeader /> : <UserHeader />}
    </header>
  );
}
>>>>>>> Stashed changes
