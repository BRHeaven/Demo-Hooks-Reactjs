import { styled } from "styled-components";

const label = ({forId,...resProps}) => {
    return <label htmlFor={forId} {...resProps}></label>
};
export const Label = styled(label)`
    display: block;
    padding: 0 5px;
    text-transform: capitalize;
    letter-spacing: .5px;
    color: #222;
    font-weight: bold;
`; 