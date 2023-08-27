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
export const HooksRedux = styled(section)`
    grid-column: 1 / span 8;
    border: 2px solid #000;
    border-radius: 5px;
`;