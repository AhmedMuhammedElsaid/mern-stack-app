import React from "react";

const SingleProduct = ({ data }) => {
  return (
    <div>
      <table className="table table-hover my-5">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col"> Product ID</th>
            <th scope="col">Department ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {data ? data.name : null}</td>
            <td>{data ? `${data.price}$` : null}</td>
            <td>{data ? data.product_id : null}</td>
            <td>{data ? data.dep_id : null} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleProduct;
