import { styled } from "styled-components";

const image = ({src,alt,...resProps}) => {
    return <img src={src} alt={alt} {...resProps}/>
};
export const ImageInfo = styled(image)`
    display: block;
    width: 100%;
    height: 350px;
    margin: 0 auto;
`;
export const ImageAvatar = styled(image)`
    display: block;
    margin: 0 auto;
    height : 50px;
    width : 50px;
`;