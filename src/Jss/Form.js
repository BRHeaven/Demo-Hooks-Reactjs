import { styled } from "styled-components";

const form = ({...resProps}) => {
    return <form {...resProps}></form>;
};
export const Form = styled(form)`
    width: 100%;
    margin: 0 auto;
`; 