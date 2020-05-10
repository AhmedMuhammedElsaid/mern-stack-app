import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import Title from "./Title";
import styled from "styled-components";

const InputForm = () => {
  let data = useSelector((state) => state.data);
  const [productName, setProductName] = useState("");
  const [theItem, setItem] = useState({});
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  let products = data.products ? data.products : null;
  let item;
  let handleProduct = () => {
    if (products) {
      item = products.filter((v) => v.name === productName.trim());
      setToggle(false);
      setMessage("");
      if (item.length === 1) {
        item = item[0];
        setItem(item);
        setToggle(true);
      } else {
        setMessage(
          <div className="text-danger my-5">
            <h3>
              Please Enter A Valid Name Or Copy Any Product Name From The Table
            </h3>
          </div>
        );
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleProduct();
    setProductName("");
  };

  return (
    <>
      {products ? (
        <>
          <Title title="Search by product name" center />
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group row mt-5">
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    required
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Type a product name ex: iPhone 11 , MacBook Pro , Acer Aspire"
                  />
                </div>
                <button
                  type="submit"
                  className="col col-sm-4  btn btn-lg btn-primary"
                >
                  Search
                </button>
              </div>
            </form>
            {toggle ? <SingleProduct data={theItem} /> : message}
          </div>
          <Space></Space>
        </>
      ) : null}
    </>
  );
};

export default InputForm;

const Space = styled.div`
  margin-bottom: 100px;
`;
