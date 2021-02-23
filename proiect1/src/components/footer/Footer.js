import React from "react";
import {Footer as F} from "./Footer.style";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    
    return (<F>Bosnea Samira &copy; {year}</F>)
    }







export default Footer;