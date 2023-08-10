import { styled } from "styled-components";

const div = ({...resProps}) => {
    return <div {...resProps}></div>;
};
export const DivCard = styled(div)`
    display: block;
    width: 100%;
    height: 500px;
    border: 2px solid #000;
    border-radius: 7px;
`;
export const DivImage = styled(div)`

`;
export const DivTitle = styled(div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
`;
export const DivShow = styled(div)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const DivInfo = styled(div)`

`;
export const DivButton = styled(div)`
    display: flex;
    margin: 10px 0;
`;