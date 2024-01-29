import React from "react";

import Banner from "@/containers/Banner/Banner";
import Contacto from "@/containers/Contacto/Contacto";
import Footer from "@/containers/Footer/Footer";

export default function Home() {

  return (
    <>
      <section>
        <Banner/>
        <Contacto/>
        <Footer/>
      </section>
    </>
  );
}
