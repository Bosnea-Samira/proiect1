import styled from "styled-components";
import {colors} from "../../environments/colors";


export const Header = styled.header`
background-color: ${colors.black};
position: fixed;
left: 0;
right: 0;
top: 0;
padding: 5px 15px;
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
margin: auto;
flex-wrap: wrap;
`;

export const Logo = styled.div`
color: white;

`;

