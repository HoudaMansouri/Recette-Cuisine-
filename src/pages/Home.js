import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import data from "../data";

const Home = () => {
  return (
    <div>
      <Header />
      <Card data={data} />
    </div>
  );
};

export default Home;
