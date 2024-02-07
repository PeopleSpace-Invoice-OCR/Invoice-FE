import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Header() {
	const location = useLocation();
  const name = location.state ? location.state.name : "";

  return (
    <HeaderWrapper>
      <Link to="/" className="logo">
        <img className="logoImg" src="/images/logo.png" alt="logoImg" />
        <div className="logoText">INVOICE OCR</div>
      </Link>
      <nav className="menu">
        {name ? (
          // 데이터가 존재하면 텍스트를 보여줌
          <span className="nameText">{"#" + name}</span>
         ) : (
          // 데이터가 없으면 로그인과 회원가입 버튼을 보여줌
          <>
            <Link to="/login" className="login">
              Login
            </Link>
          </>
        )}
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
  .nameText {
    margin-right: 16px;
    color: #2D2D2D;
    font-family: "p-bold";
    font-size: 20px;
  }
`;
