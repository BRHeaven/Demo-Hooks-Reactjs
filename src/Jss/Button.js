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
export const ButtonAddCart = styled(Button)`
    padding:0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    font-size: 1.3em;
    line-height: 17px;
    text-align: center;
    background-color: #00ce54;
    color: #fff;
    border: 1px solid #00ce54;
    &:hover {
        background-color: #fff;
        color: #00ce54;
    }
`;
export const ButtonDeleteItem = styled(Button)`
    padding:0;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    font-size: 1.3em;
    line-height: 24px;
    text-align: center;
    background-color: #b91c1c;
    color: #fff;
    border: 1px solid #b91c1c;
    &:hover {
        background-color: #fff;
        color: #b91c1c;
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