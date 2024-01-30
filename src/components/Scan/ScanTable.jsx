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

const ScanTable = ({ data, onChange, isModifying }) => {
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
            <TD>
              {isModifying ? (
                <input
                  type="text"
                  value={item.desc}
                  onChange={(e) => onChange(index, "desc", e.target.value)}
                />
              ) : (
                <span>{item.desc}</span>
              )}
            </TD>
            <TD>
              {isModifying ? (
                <input
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    onChange(index, "qty", parseInt(e.target.value, 10))
                  }
                />
              ) : (
                <span>{item.qty}</span>
              )}
            </TD>
            <TD>
              {isModifying ? (
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    onChange(index, "price", parseFloat(e.target.value))
                  }
                />
              ) : (
                <span>{item.price}</span>
              )}
            </TD>
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
