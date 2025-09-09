import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import { toast } from "react-toastify";

const Layout = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const axitProduct = cart.find((p) => p.id == product.id);
    if (axitProduct) {
      return toast.error("This Product Already Added");
    }
    setCart([...cart, product]);
    toast.success("This Product Added Successfully");
  };
  return (
    <div>
      <Navbar cart={cart} />
      <Outlet context={{ handleAddToCart }}></Outlet>
      <Footer />
    </div>
  );
};

export default Layout;
