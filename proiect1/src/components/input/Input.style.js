import styled from "styled-components";
import {colors} from "../../environments/colors";



export const Container = styled.div`
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  display: block;
  width: 95%;
  border: unset;
  background-color: ${colors.brown};
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 5px;
  &:focus {
    border: none;
    outline: unset;
    box-shadow: unset;
  }
`;

export const Textarea = styled.input`
display: block;
width: 100%;
background-color: ${colors.blue};

  `;
  export const Button = styled.span`
  padding: 10px 35px;
    background-color: ${colors.blue};
    color: ${colors.white};
    cursor: pointer;
    border: unset;
    display: inline-block;
    border-radius: 5px;
  `;