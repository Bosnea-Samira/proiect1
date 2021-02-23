import React, {useState} from "react";
import {Container, Title, Ul, Drop, Label , Dropdown, Item, Row, List} from "./Dropdown.style";


const Dropdowns = ({label, items}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdown = () => {
    return setIsOpen(!isOpen);

}

    return (
        <Container>
        <Title>    
            <List>
               <Row>
                <Ul>
                    <Drop>
                    <Label onClick={() => handleDropdown()}>{label}</Label>
              <Dropdown open = {isOpen}>
                  {items.map((item, i) => <Item key={i}>{item}</Item>)}
              </Dropdown>  
                    </Drop>
                </Ul>
            </Row> 
            </List>
            
        </Title>
             
        
        </Container>
    )
    
}


export default Dropdowns;