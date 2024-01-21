import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <img className="logoImg" src="/images/logo.png" alt="logoImg" />
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
  position: fixed;
  display: flex;
  width: 100%;
  height: 6vh;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  align-items: center;

  .logo {
    display: flex;
    margin-left: 150px;
    text-decoration: none;
    align-items: center;
  }
  .logoImg {
    width: auto;
    height: 20px;
  }
  .logoText {
    margin-left: 5px;
    color: #000000;
    font-family: "p-bold";
  }
  .menu {
    margin-left: auto;
    margin-right: 170px;
  }
  .signup {
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
