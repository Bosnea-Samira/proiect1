import styled from "styled-components";
import {colors, shadow} from "../../environments/colors";


export const Container = styled.div`
padding: 20px;
  background-color: ${colors.brown};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  box-shadow: ${shadow};
  padding: 10px 15px;
  border-radius: 5px;
  color: ${colors.blue};
  background-color: ${colors.yellowish};

`;

export const Button = styled.span`
padding: 10px 35px;
  background-color: ${colors.blue};
  color: ${colors.white};
  cursor: pointer;
  border: unset;
  display: inline-block;
  border-radius: 5px;
  :hover{
    color: ${colors.brown}
  }
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px 15px;
`;