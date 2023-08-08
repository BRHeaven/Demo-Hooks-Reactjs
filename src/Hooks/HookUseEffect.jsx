import React, {useState, useEffect} from 'react';
import { Hooks } from '../Jss/Section';
import { DivButton, DivCard, DivImage, DivInfo, DivShow, DivTitle } from '../Jss/Div';
import { ImageInfo } from '../Jss/Image';
import { Child, Notes, TitleInfo } from '../Jss/Text';
import { ButtonDisLike, ButtonLike } from '../Jss/Button';

export default function HookUseEffect(props) {
    let [stateLike, setLike] = useState({like: 0});
    let [stateDislike, setDislike] = useState({like: 0,dislike: 0});
    useEffect(() => {
        // Hàm này render lại khi lần đầu giao diện chạy và khi người dùng click nó sẽ render lại.
        // Chạy sau giao điện.
        console.log("re-render useEffect");
    });
    useEffect(() => {
        // Hàm này render khi lần đầu giao diện chạy.
        // Chạy sau giao điện.
        console.log("render useEffect lần đầu khi load giao diện");
    },[]);
    useEffect(() => {
        // Hhàm này render khi lần đầu giao diện chạy và render lại khi state được chỉ định có sự thay đổi thì render lại giao diện.
        // Chạy sau giao điện.
        console.log("render useEffect có điều kiện");
    },[stateLike.like])
    const handleLike = () => {
        return setLike({like: stateLike.like + 1});
    }
    const hanleDislike = () => {
        return setDislike({dislike : stateDislike.dislike + 1});
    }
    console.log("");
    console.log("render useEffect");
  return (
    <Hooks>
        <DivCard>
            <DivImage>
                <ImageInfo src={"https://i.pinimg.com/564x/fd/8d/3f/fd8d3f4c336201aaf2dfcb313c48424f.jpg"} alt={"meme"}/>
            </DivImage>
            <DivTitle>
                <TitleInfo>useEffect</TitleInfo>
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