import React, { useState } from "react";
import { styled } from "styled-components";

export const TableBody = styled.table`
  width: 30rem;
  border: 0.5px solid #ddd;
  background-color: var(--bg-color);
`;

export const TD = styled.td`
  text-align: right;
  border: 0.5px solid #555;
  padding: 0.3rem;
  font-family: "p-reg";
`;

export const TH = styled.th`
  border: 0.5px solid #555;
  padding: 0.3rem;
  font-family: "p-reg";
  font-size: 20px;
  text-transform: uppercase;
`;

const ScanTable = () => {
  const [data, setData] = useState([
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
    { desc: "hello", qty: 1, price: 1, total: 1.0 },
  ]);

  return (
    <TableBody>
      <thead>
        <tr>
          <TH>Description</TH>
          <TH>Qty</TH>
          <TH>Price</TH>
          <TH>Total</TH>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <TD>{item.desc}</TD>
            <TD>{item.qty}</TD>
            <TD>{item.price}</TD>
            <TD>{item.total}</TD>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <TH colSpan="3" style={{ textAlign: "left", paddingLeft: "1rem" }}>
            Order Total
          </TH>
          <TH>0</TH>
        </tr>
      </tfoot>
    </TableBody>
  );
};

export default ScanTable;
