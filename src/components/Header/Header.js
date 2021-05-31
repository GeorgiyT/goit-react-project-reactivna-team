import React from "react";
import LoginHeader from "./loginHeader/LoginHeader";
import UserHeader from "./UserHeader/UserHeader";

export default function Header() {
  return (
    <header>
      {false ? <LoginHeader /> : <UserHeader />}
    </header>
  );
}
