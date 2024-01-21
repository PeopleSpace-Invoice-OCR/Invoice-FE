import React from "react";
import { styled } from "styled-components";

export const MainBox = styled.div`
  background-color: var(--bg-color);
  height: 100vh;
`;

export const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 86vh;
  margin: 8vh 0;
  position: fixed;
`;

export const Title = styled.div`
  font-size: 80px;
  font-family: "p-bold";
  font-color: var(--font-black);
  font-weight: 600;
  line-height: 90px;
  word-wrap: break-word;
`;

export const Description = styled.div`
  color: #2d2d2d;
  font-size: 18px;
  font-family: "p-light";
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
`;

export const Start = styled.button`
  background: #f8d57e;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
`;

export const InvoiceImg = styled.img`
  width: 25rem;
`;

const Main = () => {
  return (
    <MainBox>
      <Contents>
        <Title>Scan your invoice</Title>
        <Description>
          Organize your invoice faster, simpler, and more accurately
        </Description>
        <Start>Get started</Start>
        <InvoiceImg src="./images/invoiceExample.png" alt="img" />
      </Contents>
    </MainBox>
  );
};

export default Main;
