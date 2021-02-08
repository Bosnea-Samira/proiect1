import styled from "styled-components";
import {colors} from "../../environments/colors";


export const Header = styled.header`
width: 100%;
font-size: 22px;
background-color: ${colors.brown};
position: fixed;
left: 0;
right: 0;
top: 0;
padding: 20px;
z-index: 99999999;

`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
margin: auto;
flex-wrap: wrap;
position: relative;
;
`;

export const Logo = styled.div`
color: white;
`;

export const UL = styled.ul`
 display: flex;
 /* flex-direction: row; */
 padding: 0;
 margin: 0;
 list-style-type: none;
 cursor: pointer;
 li {
     span{
    font-weight: 700;
    padding: 10px;
    margin: 3px;
    text-transform: lowercase;
    text-decoration: none;
    transition: color 0.2s;
    color: ${colors.dirtywhite};
    &:hover{
    color: ${colors.blue};
         }
     }
     
 }
 `;
