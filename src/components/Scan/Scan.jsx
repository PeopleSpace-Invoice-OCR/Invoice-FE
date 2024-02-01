import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import ScanTable from "./ScanTable";

export const Container = styled.div`
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
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: left;
  flex: 1;
  flex-direction: column;
  margin-right: 8%;
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
  font-family: "p-reg";
  font-weight: 400;
  line-height: 40px;
`;

export const ScanAgainButton = styled.button`
  width: 42vh;
  height: 7vh;
  padding: 10px 12px;
  font-size: 18px;
  font-family: "p-semibold";
  color: #5b86e5;
  background-color: white;
  border: 1px solid #5b86e5;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
`;

export const ModifyButton = styled.button`
  font-size: 18px;
  font-family: "p-semibold";
  color: white;
  background-color: #5b86e5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  width: 42vh;
  height: 7vh;
  padding: 10px 12px;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  margin-left: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 5px;
  font-size: 16px;
  font-family: "p-reg";
  color: black;

  &:focus {
    border-bottom: 2px solid #5b86e5;
  }
`;

const Scan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.uploadedImage || [];

  const [orderDate, setOrderDate] = useState("1-17-2024");
  const [shipToAddress, setShipToAddress] = useState("상세주소");

  const onNextPage = () => {
    navigate("/upload");
  };

  const [tableData, setTableData] = useState([
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
  ]);

  return (
    <Container>
      <LeftSection>
        <img src={URL.createObjectURL(uploadedImage[0])} alt="invoice" />
      </LeftSection>
      <RightSection>
        <Title>Your Invoice</Title>
        <Description>
          Order Date:
          {orderDate}
        </Description>
        <Description>
          Ship To:
          <br />
          {shipToAddress}
        </Description>
        <ScanTable data={tableData} />
        <ButtonContainer>
          <ScanAgainButton onClick={onNextPage}>Scan Again</ScanAgainButton>
          <ModifyButton>Save invoice</ModifyButton>
        </ButtonContainer>
      </RightSection>
    </Container>
  );
};

export default Scan;
