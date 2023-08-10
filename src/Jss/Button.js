import { styled } from "styled-components";

const button = ({...resProps}) => {
    return <button {...resProps}></button>;
};
export const Button = styled(button)`
    display: block;
    padding : 5px 10px;
    margin : 0px 5px;
    font-size: 1.1em;
    cursor: pointer;
    border-radius: 3px;
    transition: all .4s;
`;
export const ButtonDefault = styled(Button)`
    background-color: #4527A0;
    color: #fff;
    border: 1px solid #fff;
    &:hover {
        background-color: #fff;
        color: #4527A0;
        border: 1px solid #4527A0;
    }
`;
export const ButtonLike = styled(Button)`
    background-color: #B71C1C;
    color: #fff;
    border: 1px solid #fff;
    &:hover {
        background-color: #fff;
        color: #B71C1C;
        border: 1px solid #B71C1C;
    }
`;
export const ButtonDisLike = styled(Button)`
background-color: #000;
color: #fff;
border: 1px solid #000;
&:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
}
`;