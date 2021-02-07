import React from "react";
import {Header as H, Container, Logo} from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
    <H>
        <Container>
            <Logo>
                <FontAwesomeIcon icon={faCat}/>
            </Logo>
            
        </Container>
    </H>
    )
}













export default Header;