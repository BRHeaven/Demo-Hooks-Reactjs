import { styled } from "styled-components";

const input = ({...resProps}) => {
    return <input {...resProps}/>;
};
export const Input = styled(input)`
    display: block;
    padding : 2px 5px;
    margin: 10px auto;
`;
export const InputMessage = styled(input)`
    display: block;
    width: 90%;
    padding: 5px;
    margin: 3px 0 10px;
    border: 1px solid #777;
    transition: all .4s;
    &:hover {
        outline: none;
        border: 1px solid #111;
    }
    &:focus {
        outline:none;
        border: 1px solid #111;
    }
`;