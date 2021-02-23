import styled from "styled-components";
import {colors, shadow} from "../../environments/colors";

export const Container = styled.div`
flex:1;
width:100%;
height:100%;
border-right: 3px solid ${colors.text};
:last-child {
    border-right: unset;
}
`;
export const Description = styled.div`
display:flex;
width: 100%;
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

export const Ul = styled.ul`
 list-style:none;
 display:flex;
 padding: 5px 10px;
 margin: 10px;
 font-size: 22px;
 cursor: pointer;
 border-top: 3px solid ${colors.white};
`;

//dropdown

export const Drop = styled.div`
max-width: 100%;
position:relative;
`;

export const Dropdown = styled.div`
width: 100%;
position: absolute;
padding:10px;
top: calc (100% + 10px);
background-color: ${colors.white};
box-shadow: ${shadow};
border-radius: 5px;

z-index: 2;
${({open})=> (open ? `dispay : block` : `display : none` )}
`;

export const Label = styled.div`
width: 100%;
padding: 10px 15px;
color: ${colors.brown};
:hover{
    font-size: 23px;
    color: ${colors.coffee};
}
`;

export const Item = styled.div`
padding: 1px;
margin-bottom: 2px;
border-bottom: 1px solid ${colors.brown};
color: ${colors.brown};
:hover{
    color: ${colors.coffee};
    font-size: 24px;
}
`;

export const Row = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
`;
