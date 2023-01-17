import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 Layout of our APP
    Header 
        - Logo
        - NavBar (listitems)
        - Card
    Body
        - SearchBar
        - RestaurantList
            - RestaurantCard (many cards)
                -Image
                -Name
                -Rating
                -Cusines
    Footer
        -links
        -Copyright
**/
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
