import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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

const Scan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.image || [];

  const [orderDate, setOrderDate] = useState("1-17-2024");
  const [shipToAddress, setShipToAddress] = useState("상세주소");

  const sendDataToServer = async () => {
    try {
      const response = await axios.post(
        "http://development.localhost:8000/api/resource/Sales%20Invoice",
        {
          data: {
            owner: "Administrator",
            customer: "dongdong",
            po_no: "",
            po_date: "",
            company_address: "",
            customer_address: "",
            shipping_address_name: "",
            grand_total: "",
            items: [
              {
                item_name: "ttttttt",
                description:
                  '<div class="ql-editor read-mode"><p>dklasjdfklj</p></div>',
                qty: 12.0,
                rate: 5.0,
                amount: 11.0,
                income_account: "Salary - T",
              },
            ],
            taxes: [
              {
                charge_type: "On Item Quantity",
                account_head: "Marketing Expenses - T",
                description: "Marketing Expenses",
                tax_amount: 140.0,
              },
            ],
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

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
          <ModifyButton onClick={sendDataToServer}>Save invoice</ModifyButton>
        </ButtonContainer>
      </RightSection>
    </Container>
  );
};

export default Scan;
