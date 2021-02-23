import styled from "styled-components";
import {colors, shadow} from "../../environments/colors";

export const Container = styled.div`
flex:1;
width:100%;
max-width: 100%;
`;
export const Description = styled.div`
display:flex;
width: 90%;
max-width:100%;
padding: 10px 15px;
justify-content:center;
align-items:center;
p{
    color:${colors.text};
    cursor: default;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 10px 15px;
    font-size: 16px;
    margin : 5px;
    border-bottom: 1px solid ${colors.brown}; 
    border-top: 1px solid ${colors.brown}; 
}
h4{
    color: ${colors.brown};
:hover{
    color: ${colors.coffee};
    }
}
`;
export const Contact =styled.div`
display:flex;
width: 90%;
max-width:100%;
padding: 10px 15px;
background-color: ${colors.white};
width: 100%;
max-width: 100%;
margin-top: 23px;
padding: 0;
border-top: 1px dotted ${colors.coffee};
p{
    color:${colors.text};
    border-top: 1px solid ${colors.brown}; 
    margin:5px;
h1{
    color:${colors.brown};
    cursor: pointer;
:hover{
    color:${colors.coffee};
    }
} 
h3{
    font-size:24px;
}
}
`;

export const Img = styled.img`
position: relative;
width: 50%;
max-width:100%;
top: 20px;
bottom: 0;
left: 0;
right: 0;
border-radius: 3px;
box-shadow: ${shadow};
margin:5px;
`;

export const List = styled.div`
position: relative;
width: 45%;
max-width:100%;
ul  {
    list-style: none;
    display:flex;
    flex: wrap;
    width:100%;
    margin: 5px;
    padding: 10px;
}
`;

export const Title = styled.div`
display:flex;
color :${colors.brown};
font-weight: 700;
font-size: 30px;
margin-top: 5px;
padding: 2px;
justify-content: center;
align-items: center;

h3{
    background-color: ${colors.white};
    padding: 4px 8px;
    border-radius:5px;
}

.fa-utensils , .fa-coffee{
    width: 25px;
    color : ${colors.blue};
    padding: 6px;
}
cursor: default;
`;
export const Row = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;

`;
