import React from "react";
import { useSelector } from "react-redux";

const ProductFilter = ({ id }) => {
  let data = useSelector((state) => state.data);
  let products = data.products ? data.products : {};

  let product = products
    ? products
        .filter((product) => product.dep_id === id)
        .map((product) => {
          return (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{`${product.price}$`}</td>
              <td>{product.dep_id}</td>
            </tr>
          );
        })
    : undefined;

  return (
    <>
      {product ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Department ID</th>
            </tr>
          </thead>
          <tbody>{product}</tbody>
        </table>
      ) : null}
    </>
  );
};

export default ProductFilter;
