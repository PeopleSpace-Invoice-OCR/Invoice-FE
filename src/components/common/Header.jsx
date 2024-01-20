import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <img className="logoImg" src="/img/logo.png" alt="logoImg" />
        <div className="logoText">INVOICE OCR</div>
      </Link>
      <nav className="menu">
        <Link to="/sign-up" className="signup">
          Sign Up
        </Link>
        <Link to="/login" className="login">
          Login
        </Link>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.section`
  display: flex;
  height: 40px;
  padding: 10px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;

  .logo {
    display: flex;
    text-decoration: none;
    align-items: center;
  }
  .logoImg {
    width: auto;
    height: 20px;
    margin: 16px;
  }
  .logoText {
    color: #000000;
    font-family: "p-bold";
  }
  .menu {
    margin-left: auto;
  }
  .signup {
    margin: 16px;
    color: #000000;
    font-family: "p-bold";
    text-decoration: none;
  }
  .login {
    padding: 10px 35px;
    margin-left: 16px;
    background: #5b86e5;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    font-family: "p-bold";
    text-decoration: none;
  }
`;
