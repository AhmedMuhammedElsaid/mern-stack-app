import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductFilter from "./ProductFilter"
import Title from "./Title";

const DepartmentFilter = () => {
  
  const data = useSelector((state) => state.data);

  const [id,setId] = useState(0)
const handleClick=(id)=>{
  setId(id)
}
  
  let department = data.department
  ? data.department.map((depart) => {
      return (
          <button
            key={depart.department_id}
            className=" btn btn-outline-primary my-5 mx-5 btn-lg "
            onClick={()=>handleClick(depart.department_id)}
          >
            {depart.name}
          </button>
        );
    })
    : null;
    
  return (
    <>
      {data.department ? (
        <div className='my-5'>
     <Title title="Select Products Of The Department" center />
          {department}
         <ProductFilter id={id}/>
        </div>
      ) : null}
    </>
  );
};

export default DepartmentFilter;
