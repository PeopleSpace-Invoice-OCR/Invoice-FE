import React, { useState } from 'react';
import { styled } from "styled-components";
import { Link, useNavigate } from 'react-router-dom';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  var name = "";

  const handleLogin = () => {
    // Make a POST request to the login endpoint with email and password
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(res => {
      // Handle the response data
      console.log(res.data);
      name = res.data.full_name;
      // Pass the data when go to the next screen
      navigate("/", { state: { name: name } });
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
  };

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
        <TextField
          type="text"
          placeholder="Email"
          style={{ marginTop: '35px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="Password"
          style={{ marginTop: '35px', marginBottom: '45px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/">
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </Link>
      </RightSection>
    </SignUpContainer>
  );
};


export default Login;