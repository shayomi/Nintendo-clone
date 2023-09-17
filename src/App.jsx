import React from "react";

import Hero from "./components/Hero/Hero.jsx";
import Featured from "./components/Featured/Featured.jsx";
import Onlinestore from "./components/Onlinestore/Onlinestore.jsx";
import Gaming from "./components/Gaming/Gaming.jsx";
import News from "./components/News/News.jsx";
import Charcters from "./components/Characters/Charcters.jsx";
import Bestseller from "./components/BestSeller/Bestseller.jsx";
import DigitalNew from "./components/Digitalnew/DigitalNew.jsx";
import Nav from "./components/nav/nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Hero />
      <Nav />
      <Featured />
      <Onlinestore />
      <Gaming />
      <News />
      <Charcters />
      <Bestseller />
      <DigitalNew />
      <Footer />
    </div>
  );
};

export default App;
