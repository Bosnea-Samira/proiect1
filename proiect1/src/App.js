import React from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Share from "./components/share/Share";
import Dropdowns from "./components/dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUtensils } from "@fortawesome/free-solid-svg-icons";
import {Title, Row} from "./components/dropdown/Dropdown.style";
import "./style.css";


function App() {

    return (
      <div>
   
     <Header/>
     <Share/>
     <Title><h3>Menu</h3></Title>
     <Title>
       <FontAwesomeIcon icon={faCoffee}/>Drinks<FontAwesomeIcon icon={faCoffee}/>
     </Title>
     <Row>
     <Dropdowns label="Hot Coffees" items={["Macchiato", "Capuccino", "Espresso", "Latte"]}/>
     <Dropdowns label="Iced Coffees" items={["Frapuccino", "Iced Espresso", "Cold Brew"]}/>
     <Dropdowns label="Hot Drinks" items={["Hot Choco", "Hot Vanilla"]}/>
     <Dropdowns label="Tea just for you" items={["Hot Tea", "Iced Tea"]}/>
     </Row>
     <Title>
     <FontAwesomeIcon icon= {faUtensils} /> Food <FontAwesomeIcon icon= {faUtensils} />
     </Title>
     <Row>
     <Dropdowns label="Hot Breakfast" items={["Potato Chips", "Egg Rolls", "Bacon & Eggs"]}/>
     <Dropdowns label="Bakery & Patries" items={["Croissant" , "Cinnamon rolls", "Bagels"]}/>
     <Dropdowns label="Sweets & Snacks" items={["Chocolate Cookies", "GingerBread", "Chocolate chips"]}/>
     <Dropdowns label="Sandwiches" items={["With Bacon", "Ham & Cheese", "With Chicken"]}/>
     </Row>
    <Content/>
     <Footer/>
     
   </div>
    );
  };

  export default App;