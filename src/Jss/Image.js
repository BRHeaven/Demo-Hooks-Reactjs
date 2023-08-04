import { styled } from "styled-components";

const image = ({src,alt,...resProps}) => {
    return <img src={src} alt={alt} {...resProps}/>
};
export const ImageInfo = styled(image)`
    display: block;
    width: 100%;
    height : 700px;
    margin: 0 auto;
`;