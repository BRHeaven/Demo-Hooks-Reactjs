/* eslint-disable jsx-a11y/heading-has-content */
import { styled } from "styled-components";

const text = ({...resProps}) => {
    return <p {...resProps}></p>;
};
const title = ({...resProps}) => {
    return <h2 {...resProps}></h2>;
};
const textChild = ({...resProps}) => {
    return <p {...resProps}></p>;
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
export const Child = styled(textChild)`
    margin : 0 5px;
    font-size: 1.1em;
`;