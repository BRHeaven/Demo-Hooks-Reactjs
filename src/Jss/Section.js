import { styled } from "styled-components";

const section = ({...resProps}) => {
    return <section {...resProps}></section>
};
export const SectionMain = styled(section)`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    gap:10px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
`;
export const Hooks = styled(section)`

`;