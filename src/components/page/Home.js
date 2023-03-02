import React from "react";
import Banner from "../../section/banner/Banner";
import Brands from "../../section/brands/Brands";
import Episodes from "../../section/episodes/Episodes";
import Footer from "../../section/footer/Footer";
import NavBar from "../../section/navBar/NavBar";

const Home = () => {
  return (
    <section>
      <NavBar />
      <Banner />
      <Brands />
      <Episodes />
      <Footer />
    </section>
  );
};

export default Home;
