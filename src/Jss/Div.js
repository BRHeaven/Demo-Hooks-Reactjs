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
export const DivButtonCard = styled(div)`
    display: flex;
    justify-content: center;
    grid-column: 3 / span 2;
`;
export const DivText = styled(div)`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`;
export const DivInput = styled(div)`
`;
export const DivItemCard = styled(div)`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    width: 96%;
    margin: 0 auto;
    align-items: center;
    border-bottom: 1px solid #808683;
`;
export const DivListCard = styled(div)`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
    border-bottom: 1px solid #292f2d;
`;
export const DivMessage = styled(div)`
    width: 85%;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid #333;
    border-radius: 5px;
`;
export const DivUser = styled(div)`
    display: grid;
    grid-template-columns: repeat(20,1fr);
    align-items: center;
    width: 90%;
    padding: 10px 0;
    margin: 0 auto;
    border-bottom: 1px solid #222;
`;
export const DivAvatar = styled(div)`
    grid-column: 1 / span 1;
`;
export const DivUserMessage = styled(div)`
    grid-column: 2 / span 19;
`;