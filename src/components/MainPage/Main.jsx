import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const MainBox = styled.div`
  background-color: var(--bg-color);
  height: 100vh;
  justify-content: center;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  height: 86vh;
  margin: 8vh 0;
  padding: 0 0 40vh 40vh;
  position: fixed;
`;

export const Title = styled.div`
  font-size: 80px;
  font-family: "p-bold";
  color: var(--font-black);
  font-weight: 600;
  line-height: 90px;
  word-wrap: break-word;
  padding: 0 25vh 0 0;
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
  padding: 13px 20px 13px 20px;
  margin: 20px 0 0 0;
  font-size: 17px;
  font-color: #ffffff;
`;

export const InvoiceImg = styled.img`
  width: 25rem;
`;

const Main = () => {
  const navigate = useNavigate();

  const onNextPage = () => {
    navigate("/upload");
  };

  return (
    <MainBox>
      <Contents>
        <div>
          <Title>
            Scan your
            <br />
            invoice
          </Title>
          <Description>
            Organize your invoice
            <br />
            faster, simpler, and more accurately
          </Description>
          <Start onClick={onNextPage}>Get started</Start>
        </div>
        <InvoiceImg src="./images/invoiceExample.png" alt="img" />
      </Contents>
    </MainBox>
  );
};

export default Main;
