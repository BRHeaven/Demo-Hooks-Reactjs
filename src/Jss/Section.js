import { styled } from "styled-components";

const section = ({...resProps}) => {
    return <section {...resProps}></section>
};
export const SectionMain = styled(section)`
    display: flex;
    justify-content: center;
    width: 60%;
    padding: 0;
    margin: 0 auto;
`;