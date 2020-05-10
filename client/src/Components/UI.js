import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DepartmentFilter from "./DepartmentFilter";
import getData from "../Store/actionCreator";
import InputForm from "./InputForm";
import Products from "./Products";
import Hero from "./Hero";

const UI = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      <Hero />
      <div className="container">
        <Products />
        <InputForm />
        <DepartmentFilter />
      </div>
    </>
  );
};

export default UI;
