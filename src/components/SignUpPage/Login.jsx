import React from 'react';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
    display: flex;
    background-color: rgba(91, 134, 229, 0.3);
    width: 100%;
    height: 100vh;
`

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 4;
`

export const RightSection = styled.div`
    display: flex; /* RightSection도 flex 컨테이너로 변경 */
    flex-direction: column; /* 아이템들을 수직 방향으로 배치 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
    background-color: #FFFFFF;
    flex: 6;
    height: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
`

export const Title = styled.div`
  font-size: 50px;
  font-family: "p-semibold";
  color: white;
  line-height: 90px;
  word-wrap: break-word;
  display: inline-block;
  line-height: 70px;
  width: 451px;
  height: 200px;
  margin-bottom: 120px; /* Title과 LogoImg 사이의 간격 */
`;

export const Highlight = styled.span`
  font-size: 50px;
  font-family: "p-bold";
  color: #5B86E5;
  line-height: 60px;
`;

export const Logo = styled.div`
  display: inline-block;
  height: 300px;
  width: 300px;
`;

export const SignUpText = styled.div`
  font-size: 35px;
  font-family: "p-extrabold";
  color: black;
  display: block;
  width: 50%;
  height: 40px;
  text-align: left;
`;

export const TextField = styled.input`
  font-size: 16px;
  font-family: "p-regular";
  color: #9D9D9D;
  width: 575px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #9D9D9D;
  outline: none;

  &:focus {
    border-bottom: 1px solid #007BFF;
  }
`;

export const LoginButton = styled.button`
  font-size: 20px;
  font-family: "p-semibold";
  color: white;
  background-color: #5B86E5;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 575px;
  height: 60px;
  transition: background-color 0.3s ease;
  border-radius: 8px;

  &:hover {
    background-color: #3d6ab7;
  }
`;

export const LoginText = styled.div`
  font-size: 16px;
  font-family: "p-medium";
  color: black;
  margin-top: 20px;
`;

const Login = () => {
  return (
    <SignUpContainer>
      <LeftSection>
        <Title>Need <Highlight>Invoice OCR </Highlight>
        for your business?
        We will help you.</Title>
        <Logo>
          <img src="/images/text.magnifyingglass.svg" alt="magnifyingglassImg" />
        </Logo>
      </LeftSection>
      <RightSection>
        <SignUpText>Login</SignUpText>
        <TextField type="text" placeholder="Email" style={{ marginTop: '35px' }}></TextField>
        <TextField type="text" placeholder="Password" style={{ marginTop: '35px', marginBottom: '45px' }}></TextField>
        <Link to="/"><LoginButton>Login</LoginButton></Link>
      </RightSection>
    </SignUpContainer>
  );
};

export default Login;