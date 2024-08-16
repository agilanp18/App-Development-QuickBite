import React from "react";
import { Link } from "react-router-dom";
import MenuCarousel from "./MenuCarousel";
import HeroSection from "./HeroSection";


function Welcome() {
  const styleHero = {
    height: "50rem",
    width: "100%",
  };
  return (
    <>
    <HeroSection />
    
      <MenuCarousel/>
    
    </>
  );
}

export default Welcome;
