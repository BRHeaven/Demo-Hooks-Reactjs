/* eslint-disable jsx-a11y/heading-has-content */
import { styled } from "styled-components";

const text = ({...resProps}) => {
    return <p {...resProps}></p>;
};
const title = ({...resProps}) => {
    return <h2 {...resProps}></h2>;
};
export const Notes = styled(text)`
    margin: 0 20px 5px;
    font-style: oblique;
    font-size: 1.1em;
    letter-spacing: .5px;
    color : #000;
`;
export const TitleInfo = styled(title)`
    margin: 5px;
    letter-spacing: 1px;
    color : #000;
`;
export const Child = styled(text)`
    margin : 0 5px;
    font-size: 1.1em;
`;
export const TextCard = styled(text)`
    width: 100%;
    text-align: start;
    padding : 0 5px;
    grid-column: 1 / span 2;
`;
export const TextName = styled(text)`
    margin: 0;
    text-align: start;
    text-transform: capitalize;
    font-size: 1.1em;
    font-weight: bold;
    font-style: oblique;
    letter-spacing: .5px;
`;
export const TextMessage = styled(text)`
    margin: 5px 0;
    text-align: start;
    letter-spacing: .3px;
    color: #444;
`;