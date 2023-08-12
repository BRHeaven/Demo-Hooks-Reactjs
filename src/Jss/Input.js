import { styled } from "styled-components";

const input = ({...resProps}) => {
    return <input {...resProps}/>;
};
export const Input = styled(input)`
    display: block;
    padding : 2px 5px;
    margin: 10px auto;
`;