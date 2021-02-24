import React from "react";
import {Container,InputField,Textarea} from "./Input.style";


export const Input = ({ type, value, placeholder, onChange, field }) => {
    return (
      <Container>
        {type === "textarea" ? (
          <Textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value, field)}
          ></Textarea>
        ) : (
          <InputField
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value, field)}
          />
        )}
        
      </Container>
      
    );
  };
 export default Input;  



