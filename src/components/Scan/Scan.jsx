import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import ScanTable from "./ScanTable";

export const Container = styled.div`
  height: 80vh;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSection = styled.div`
  height: 80vh;
  display: flex;
  flex: 1;
  margin-left: 5%;
`;

export const RightSection = styled.div`
  height: 80vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: left;
  flex: 1;
  flex-direction: column;
  margin-right: 8%;
`;

export const ScanTableContainer = styled.div``;

export const Title = styled.span`
  font-size: 40px;
  font-family: "p-semibold";
  color: black;
  line-height: 60px;
`;

export const Description = styled.div`
  color: black;
  font-size: 20px;
  font-family: "p-reg";
  font-weight: 400;
  line-height: 40px;
`;

export const ScanAgainButton = styled.button`
  font-size: 20px;
  font-family: "p-semibold";
  color: #5b86e5;
  background-color: white;
  border: 1px solid #5b86e5;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 285px;
  height: 60px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--dark-color);
    color: #ffffff;
  }
`;

export const ModifyButton = styled.button`
  font-size: 20px;
  font-family: "p-semibold";
  color: white;
  background-color: #5b86e5;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 285px;
  height: 60px;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  margin-left: 15px;

  &:hover {
    background-color: #ffffff;
    color: var(--dark-color);
    border: 1px solid #5b86e5;
    border-radius: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`;

const Scan = () => {
  return (
    <Container>
      <LeftSection>
        <img src="/images/invoiceExample.png" alt="invoice" />
      </LeftSection>
      <RightSection>
        <Title>Your Invoice</Title>
        <Description>Order Date: 1-17-2024</Description>
        <Description>Ship To:</Description>
        <Description>상세주소</Description>
        <ScanTableContainer>
          <ScanTable />
        </ScanTableContainer>
        <ButtonContainer>
          <ScanAgainButton>Scan Again</ScanAgainButton>
          <ModifyButton>Modify Information</ModifyButton>
        </ButtonContainer>
      </RightSection>
    </Container>
  );
};

export default Scan;
