import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Search />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
