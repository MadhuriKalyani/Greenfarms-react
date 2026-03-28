import React from 'react'
import ProductsLayout from "./ProductsLayout";
import img1 from "../Images/453933.jpg";
function Fruits() {
   const fruitsProducts = [
    { id: 7, name: "Apple", img: img1, unit:"4 pcs", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 8, name: "Avacado", img: img1, unit:"1 pcs", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 9, name: "Orange", img: img1, unit:"4 pcs",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
     { id: 10, name: "Dragon", img: img1, unit:"1 pcs",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
  ];

  return <ProductsLayout title="Veggies" products={fruitsProducts} />;
}

export default Fruits