import React, {useState} from "react";
import {Container,Wrapper, Title, Button} from "./News.style";
import {Input} from "../input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";




const News = () => {
    const [values, setValues] = useState({
       firstn: "",
       email: ""
    })
    function handleInput(val, field) {
        setValues({
          ...values,
          [field]: val,
        });
}
    return(
        <Container>
            <Wrapper>
                <Title>
                    <h3>Register your cat!</h3>
                </Title>
           
            <Input
           value={values.firstn} 
           type="text" 
           placeholder="Cat Name" 
           field="firstn"
           onChange={handleInput} />
        
           <Input
           value={values.secondn} 
           type="text" 
           placeholder="Email adress" 
           field="email"
           onChange={handleInput} />
            <Button>
                <FontAwesomeIcon icon= {faCat}/>
            </Button>
            </Wrapper>
        
        </Container>
    )
}






export default News;