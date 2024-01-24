import React, { useRef, useState } from "react";
import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSection = styled.div`
  height: 100vh;
  background-color: gray;
  display: flex;
  flex: 5;
`;

export const RightSection = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: left;
  flex: 5;
  flex-direction: column;
  margin-left: 8%;
`;

export const Title = styled.span`
  font-size: 40px;
  font-family: "p-semibold";
  color: black;
  line-height: 60px;
`;

export const Description = styled.div`
  color: black;
  font-size: 20px;
  font-family: "p-regular";
  font-weight: 400;
  line-height: 40px;
`;

export const Table = styled.div`
  background-color: green;
  width: 500px;
  height: 500px;
  margin-top: 30px;
`;

export const ScanAgainButton = styled.button`
  font-size: 20px;
  font-family: "p-semibold";
  color: #5b86e5; /* 글자 색상 */
  background-color: white; /* 버튼 자체의 색상 */
  border: 1px solid #5b86e5; /* 테두리 색상 및 두께 */
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 20px;
  width: 285px;
  height: 60px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3d6ab7;
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
    background-color: #3d6ab7;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`

const Scan = () => {
  return (
    <Container>
        <LeftSection />
        <RightSection>
            <Title>Your Invoice</Title>
            <Description style={{ marginTop: "30px" }}>Order Date: 1-17-2024</Description>
            <Description style={{ marginTop: "20px" }}>Ship To: 어쩌구</Description>
            <Table />
            <ButtonContainer>
            <ScanAgainButton>Scan Again</ScanAgainButton>
            <ModifyButton>Modify Information</ModifyButton>
            </ButtonContainer>
        </RightSection>
    </Container>
  );
};

export default Scan;
