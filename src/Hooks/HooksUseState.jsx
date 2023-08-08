import React, {useState} from 'react';
import { Hooks } from '../Jss/Section';
import { DivButton, DivCard, DivImage, DivInfo, DivShow, DivTitle } from '../Jss/Div';
import { ImageInfo } from '../Jss/Image';
import { Child, Notes, TitleInfo } from '../Jss/Text';
import { ButtonDisLike, ButtonLike } from '../Jss/Button';

export default function HooksUseState(props) {
    let [stateLike, setLike] = useState({like: 0});
    let [stateDislike, setDislike] = useState({like: 0,dislike: 0});
    const handleLike = () => {
        return setLike({like: stateLike.like + 1});
    }
    const hanleDislike = () => {
        return setDislike({dislike : stateDislike.dislike + 1});
    }
    console.log("re-render useState");
  return (
    <Hooks>
        <DivCard>
            <DivImage>
                <ImageInfo src={"https://i.pinimg.com/564x/97/fa/2d/97fa2da0a2f8edd117e5663b458a12d9.jpg"} alt={"meme"}/>
            </DivImage>
            <DivTitle>
                <TitleInfo>useState</TitleInfo>
                <DivShow>
                    <Child style={{color:"#B71C1C"}}>{stateLike.like} <i className="fa fa-heart"/></Child>
                    <Child style={{color:"#000"}}>{stateDislike.dislike} <i className="fa fa-heart-broken"/></Child>
                </DivShow>
            </DivTitle>
            <DivInfo>
                <Notes>F12 xem console</Notes>
            </DivInfo>
            <DivButton>
                <ButtonLike type="button" onClick={() => {handleLike()}}>Like <i className="fa fa-heart"/></ButtonLike>
                <ButtonDisLike type="button" onClick={() => {hanleDislike()}}>DisLike <i className="fa fa-heart-broken" /></ButtonDisLike>
            </DivButton>
        </DivCard>
    </Hooks>
  )
};