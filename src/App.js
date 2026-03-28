import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "../src/Componenets/ImageSlider";
import Layout from "./Layout";
import Veggies from "../src/Componenets/Veggies";
import Fruits from "../src/Componenets/Fruits"
import Juices from "../src/Componenets/Juices"
import ProductsDetails from "./Componenets/ProductsDetails";
import ContactUs from "./Componenets/ContactUs";
import Order from "./Componenets/Order";
import MyOrders from "./Componenets/Checkout";
import Faq from "./Componenets/Faq";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ImageSlider />}></Route>
            <Route  path="/veggies" element={<Veggies/>}></Route>
          <Route  path="/fruits" element={<Fruits/>}></Route>
          <Route  path="/juices" element={<Juices/>}></Route>
          <Route  path="/ProductsDetails/:id" element={<ProductsDetails/>}></Route>
          <Route  path="/Contact" element={<ContactUs></ContactUs>}></Route>
          <Route  path="/order" element={<Order></Order>}></Route>
          <Route  path="/myorders" element={<MyOrders></MyOrders>}></Route>
          <Route  path="/faq" element={<Faq></Faq>}></Route>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
