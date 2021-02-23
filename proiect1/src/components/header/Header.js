import React from "react";
import {Header as H, Container, Logo, UL} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
    <H>
        <Container>
            <Logo>
                <FontAwesomeIcon icon={faCat}/>Lazy CAT Cafe 
            </Logo>
            <UL>
                <li>
                    <span>Log in</span>
                </li>
                <li>
                    <span>Join now</span>
                </li>
            </UL>

        </Container>
    </H>
   
     
    )
}







export default Header;