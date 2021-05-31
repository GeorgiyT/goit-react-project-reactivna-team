import React from "react";
import UserHeader from "./UserHeader/UserHeader";
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
