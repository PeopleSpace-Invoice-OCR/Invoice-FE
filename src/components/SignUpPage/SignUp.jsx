import React from 'react';
import { styled } from "styled-components";

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

const SignUp = () => {
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
      </RightSection>
    </SignUpContainer>
  );
};

export default SignUp;
