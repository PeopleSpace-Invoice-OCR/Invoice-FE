import React from "react";
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

export const InputField = styled.input`
  border: none;
  outline: none;
  padding: 0.3rem;
  font-family: "p-reg";
  color: black;
  background-color: transparent;
`;

const ScanTable = ({ data, price, onTableChange, setPrice, isModifying }) => {
  const setSubTotal = (newSubTotal) => {
    setPrice((prevPrice) => ({ ...prevPrice, subTotal: newSubTotal }));
  };

  const setTax = (newSubTotal) => {
    setPrice((prevPrice) => ({ ...prevPrice, tax: newSubTotal }));
  };

  const setOrderTotal = (newSubTotal) => {
    setPrice((prevPrice) => ({ ...prevPrice, orderTotal: newSubTotal }));
  };

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
                <InputField
                  type="text"
                  value={item.desc}
                  onChange={(e) => onTableChange(index, "desc", e.target.value)}
                />
              ) : (
                <span>{item.desc}</span>
              )}
            </TD>
            <TD>
              {isModifying ? (
                <InputField
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    onTableChange(index, "qty", parseInt(e.target.value, 10))
                  }
                  style={{ width: "3rem" }}
                />
              ) : (
                <span>{item.qty}</span>
              )}
            </TD>
            <TD>
              {isModifying ? (
                <InputField
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    onTableChange(index, "price", parseFloat(e.target.value))
                  }
                  style={{ width: "5rem" }}
                />
              ) : (
                <span>{item.price}</span>
              )}
            </TD>
            <TD>
              {isModifying ? (
                <InputField
                  type="number"
                  value={item.total}
                  onChange={(e) =>
                    onTableChange(index, "total", parseFloat(e.target.value))
                  }
                  style={{ width: "5rem" }}
                />
              ) : (
                <span>{item.total}</span>
              )}
            </TD>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <TH colSpan="3" style={{ textAlign: "left", paddingLeft: "1rem" }}>
            Sub Total
          </TH>
          <TH>
            {isModifying ? (
              <InputField
                type="number"
                value={price.subTotal}
                onChange={(e) => setSubTotal(parseFloat(e.target.value))}
                style={{ width: "5rem" }}
              />
            ) : (
              <span>{price.subTotal}</span>
            )}
          </TH>
        </tr>
        <tr>
          <TH colSpan="3" style={{ textAlign: "left", paddingLeft: "1rem" }}>
            Tax
          </TH>
          <TH>
            {isModifying ? (
              <InputField
                type="number"
                value={price.tax}
                onChange={(e) => setTax(parseFloat(e.target.value))}
                style={{ width: "5rem" }}
              />
            ) : (
              <span>{price.tax}</span>
            )}
          </TH>
        </tr>
        <tr>
          <TH colSpan="3" style={{ textAlign: "left", paddingLeft: "1rem" }}>
            Order Total
          </TH>
          <TH>
            {isModifying ? (
              <InputField
                type="number"
                value={price.orderTotal}
                onChange={(e) => setOrderTotal(parseFloat(e.target.value))}
                style={{ width: "5rem" }}
              />
            ) : (
              <span>{price.orderTotal}</span>
            )}
          </TH>
        </tr>
      </tfoot>
    </TableBody>
  );
};

export default ScanTable;
