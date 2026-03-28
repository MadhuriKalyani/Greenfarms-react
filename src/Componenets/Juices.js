import React from "react";
import ProductsLayout from "./ProductsLayout";
import img1 from "../Images/Beetroot-Juice-square.webp";
import img2 from "../Images/Blueberry-Juice-001.webp";
import img3 from "../Images/cucumber-juice-recipe.jpg";
import img4 from "../Images/Pineapple-Ginger-Juice.webp";
import img5 from "../Images/waterlemon.avif";
function Juices() {
  const juicesProducts = [
    {
      id: 11,
      name: "BEETROOT",
      img: img1,
      unit: "250 ml",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "100",
    },
    {
      id: 12,
      name: "BLUEBERRY",
      img: img2,
      unit: "250 ml",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "100",
    },
    {
      id: 13,
      name: "CUCUMBER",
      img: img3,
      unit: "250 ml",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "100",
    },
    {
      id: 14,
      name: "PINEAPPLE",
      img: img4,
      unit: "250 ml",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "100",
    },
    {
      id: 15,
      name: "WATERMELON",
      img: img5,
      unit: "250 ml",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "100",
    },
  ];

  return <ProductsLayout title="Veggies" products={juicesProducts} />;
}

export default Juices;
