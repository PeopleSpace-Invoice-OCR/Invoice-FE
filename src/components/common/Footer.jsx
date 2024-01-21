import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="logo">{"ⓒ"} PeopleSpace 2024</div>
      <div className="contact">Contact us</div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.section`
  position: fixed;
  display: flex;
  width: 100%;
  height: 4vh;
  bottom: 0;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  align-items: center;

  .logo {
    display: flex;
    margin-left: 150px;
    font-family: "p-reg";
    text-decoration: none;
    align-items: center;
  }
  .contact {
    margin-left: auto;
    margin-right: 170px;
    font-family: "p-reg";
  }
`;
