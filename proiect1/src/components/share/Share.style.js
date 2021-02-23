import styled from "styled-components";
import style from "styled-components";
import {colors} from "../../environments/colors";


export const Shared= styled.div`
  position: fixed;
  top: 40%;
  right: 3px;
  width: 40px;
  margin: 0;
  padding: 0;
  font-size: 30px;
  color: ${colors.blue};
  border-right: 2px solid ${colors.brown};
  z-index: 1;
 .fa-share, .fa-envelope, .fa-heart{
   :hover{
     font-size:33px;
     color: ${colors.coffee};
   }
 }
  

`;