import Image from "next/image";

import React from 'react'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Footer/>
      

    </div>
  )
}

export default page
