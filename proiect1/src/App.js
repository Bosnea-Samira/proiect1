import React from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { Container } from "./components/header/Header.style";



function App() {
    return (
   <div>
     <Container/>
     <Header/>
     <Content/>
   </div>
    );
  }
  
  export default App;