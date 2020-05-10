import React from "react";
import { useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import Title from "./Title";

const Products = () => {
  const data = useSelector((state) => state.data);

  const Columns = [
    { dataField: "name", text: "Product Name" },
    { dataField: "price", text: "Product Price" },
    { dataField: "discount", text: "Product discount" },
    { dataField: "code", text: "Product code" },
  ];

  let promotions = data.products
    ? data.promotions.map((item) => {
        return {
          active: item.active,
          discount: item.discount,
          code: item.code,
        };
      })
    : null;

  let discount = promotions
    ? promotions.map((item) => {
        return item.active
          ? { discount: item.discount, code: item.code }
          : { discount: "No Discount", code: item.code };
      })
    : null;
  let products = data.products ? data.products : {};

  let renderData = [];

  for (let i = 0; i < products.length; i++) {
    let item = {
      name: products[i].name,
      price: `${products[i].price}$`,
      discount: discount[i].discount,
      code: discount[i].code,
    };
    renderData.push(item);
    item = {};
  }

  return (
    <div className="my-5">
      {data.products ? (
        <>
          <Title title="Products Data" center />
          <BootstrapTable
            keyField="name"
            data={renderData ? renderData : {}}
            columns={Columns}
            pagination={paginationFactory()}
          />
        </>
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
};

export default Products;
