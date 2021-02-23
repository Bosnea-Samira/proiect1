import styled from "styled-components";
import {colors,shadow} from "../../environments/colors";


export const Header = styled.header`
max-width: 100%;
font-size: 30px;
background-color: ${colors.white};
position: sticky;
left: 0;
right: 0;
top: 0;
padding: 20px;
overflow: hidden;
z-index: 3;
border-radius: 5px;
box-shadow: ${shadow}; 
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1200px;
margin: 0 auto;
`;

export const Logo = styled.div`
background-color: ${colors.blue};
border-radius: 8px;
padding: 5px;
.fa-cat{
    padding:5px;
}
color: ${colors.brown};
&:hover {
    color: ${colors.coffee}
}
`;

export const UL = styled.ul`
 display: flex;
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
    color: ${colors.brown};
    &:hover{
    color: ${colors.coffee};
    font-size: 33px;
         }
     }  
 }
 `;


