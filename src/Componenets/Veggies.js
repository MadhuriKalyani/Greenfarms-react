import React from "react";
import ProductsLayout from "./ProductsLayout";
import img1 from "../Images/453933.jpg";

function Veggies() {
  const veggieProducts = [
    { id: 1, name: "Tomatoes", img: img1, unit: "250 gms", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 2, name: "Onions", img: img1, unit: "1 brunch", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",price:"25" },
    { id: 3, name: "Carrot", img: img1, unit: "500 gms", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 4, name: "Beetroot", img: img1, unit: "1 Kg", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 5, name: "Bottle Gourd", img: img1, unit: "600 gms", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
    { id: 6, name: "Spinach", img: img1, unit: "400 gms", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price:"25" },
  ];

  return <ProductsLayout title="Veggies" products={veggieProducts} />;
}

export default Veggies;
