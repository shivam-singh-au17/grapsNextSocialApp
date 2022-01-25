import React, { useContext } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeContexts2 } from "../Contexts/ThemeContexts2";
import "../style.css";

const Home = () => {
  const { theme2 } = useContext(ThemeContexts2);
  console.log("theme2:", theme2);
  return (
    <>
      <Navbar />
      <div className="hameMainBox my-4 fs-2 text-primary">
        <div>
          <span className="fw-bold text-dark">User Name : </span>{" "}
          {theme2.user.name}
        </div>
        <div>
          <span className="fw-bold text-dark">User Email : </span>
          {theme2.user.email}
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
