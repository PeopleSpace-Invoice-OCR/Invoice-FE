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
  const uploadedImage = location.state?.image || [];
  const data = location.state?.data;

  const [orderDate, setOrderDate] = useState(data.po_date);
  const [shipToAddress, setShipToAddress] = useState(data.customer_address);

  const [isModifying, setIsModifying] = useState(false);

  const sendDataToServer = async () => {
    try {
      const response = await axios.post(
        "http://development.localhost:8000/api/resource/Sales%20Invoice",
        {
          data: {
            owner: "Administrator",
            customer: "lee",
            po_no: "123",
            po_date: orderDate,
            company_address: "Hello-Billing",
            customer_address: "Hello-Billing",
            shipping_address_name: "Hello-Billing",
            grand_total: "0",
            items: tableData,
            taxes: [
              {
                charge_type: "On Item Quantity",
                account_head: "Marketing Expenses - P",
                description: "Marketing Expenses",
                tax_amount: 10.0,
              },
            ],
          },
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      alert("Saved.");
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  const onNextPage = () => {
    navigate("/upload");
  };

  // const [tableData, setTableData] = useState(data);
  const handleModify = () => {
    console.log("스캔에서 받은 거" + data.owner);
    setIsModifying(!isModifying);
  };

  const handleSaveChanges = () => {
    alert("Your changes have been saved.");

    setIsModifying(false);
  };

  const [tableData, setTableData] = useState(data.items);

  const [price, setPrice] = useState({
    subTotal: data.grand_total,
    tax: data.taxes[data.taxes.length - 1].tax_amount, // 임의로 맨 마지막 값을 최종 텍스로 두었음
    orderTotal:
      parseFloat(data.grand_total) +
      parseFloat(data.taxes[data.taxes.length - 1].tax_amount),
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
          Invoice Issue Date:
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
          Customer Address:
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
