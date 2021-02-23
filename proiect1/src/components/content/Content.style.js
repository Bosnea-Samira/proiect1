import styled from "styled-components";
import {colors} from "../../environments/colors";

export const Post = styled.div`
display: flex;
width: 100%;
max-width: 1200px;
margin: 0 auto;


`;

export const Title = styled.div`
color :${colors.brown};
font-weight: 700;
font-size: 14px;
margin-top: 5px;
justify-content: center;
align-items: center;
:hover{
color: ${colors.coffee};
}
`;

export const Ul = styled.ul`
 list-style:none;
 display:flex;
 flex-direction: column;
 padding: 5px 10px;
 margin: 10px;
 font-size:22px;
 cursor: pointer;
 li{
   color: ${colors.text};
   padding: 15px;
   font-size: 28px;
   &:hover{
     color: ${colors.coffee}
   }
 }
`;
