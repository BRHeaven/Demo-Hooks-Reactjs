import { styled } from "styled-components";

const form = ({...resProps}) => {
    return <form {...resProps}></form>;
};
export const Form = styled(form)`
    width: 100%;
    margin: 0 auto;
`;
export const FormMessage = styled(form)`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    padding: 5px 7px;
    margin: 10px auto;
    width: 70%;
    align-items: center;
`;