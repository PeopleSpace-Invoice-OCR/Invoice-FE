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
  white-space: pre-line;
`;

export const SaveButton = styled.button`
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

  const [orderDate, setOrderDate] = useState("12/5/23");
  const [shipToAddress, setShipToAddress] = useState(
    "DANIEL LEE \n 1691 KETTERING ST \n CA 92614\n IRVINE \n 949-829-1691"
  );

  const [isModifying, setIsModifying] = useState(false);

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

  const handleModify = () => {
    setIsModifying(!isModifying);
  };

  const handleSaveChanges = () => {
    alert("Your changes have been saved.");

    setIsModifying(false);
  };

  const [tableData, setTableData] = useState([
    { desc: "STEERING CPLR,GERM,T1,3", qty: 1, price: 22.95, total: 22.95 },
    { desc: "URETN,AXLE TUBE SL, BJ,SET", qty: 1, price: 18.95, total: 18.95 },
    { desc: "FRONT WHL SEAL,68.5-,EA", qty: 2, price: 2.99, total: 5.98 },
    { desc: "ECCENTRC WSHR BJ", qty: 2, price: 2.59, total: 5.18 },
    { desc: "CV FLANGE SEAL KT,T1&3", qty: 2, price: 8.49, total: 16.98 },
    { desc: "PUG WIRES,EMPL,USA,GRY", qty: 1, price: 36.95, total: 36.95 },
    { desc: "VALVE,FUEL SHUT OFF", qty: 1, price: 9.95, total: 9.95 },
  ]);

  const [price, setPrice] = useState({
    subTotal: 116.94,
    tax: 11.98,
    orderTotal: 128.92,
  });

  const handleTableDataChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  return (
    <Container>
      <LeftSection>
        <img src={URL.createObjectURL(uploadedImage[0])} alt="invoice" />
      </LeftSection>
      <RightSection>
        <Title>Your Invoice</Title>
        <Description>
          Order Date:
          {isModifying ? (
            <InputField
              type="text"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
            />
          ) : (
            <span>{orderDate}</span>
          )}
        </Description>
        <Description>
          Ship To:
          <br />
          {isModifying ? (
            <InputField
              type="text"
              value={shipToAddress}
              onChange={(e) => setShipToAddress(e.target.value)}
            />
          ) : (
            <span>{shipToAddress}</span>
          )}
        </Description>
        <ScanTable
          data={tableData}
          price={price}
          onTableChange={handleTableDataChange}
          setPrice={setPrice}
          isModifying={isModifying}
        />
        <ButtonContainer>
          {isModifying ? (
            <ModifyButton onClick={handleSaveChanges}>
              Save Changes
            </ModifyButton>
          ) : (
            <ModifyButton onClick={handleModify}>
              Modify Information
            </ModifyButton>
          )}
          <SaveButton onClick={sendDataToServer}>Save invoice</SaveButton>
        </ButtonContainer>
      </RightSection>
    </Container>
  );
};

export default Scan;
