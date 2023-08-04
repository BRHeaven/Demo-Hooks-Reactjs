import React, {useState} from 'react';
import { SectionMain } from '../Jss/Section';
import { DivButton, DivCard, DivImage, DivInfo, DivShow, DivTitle } from '../Jss/Div';
import { ImageInfo } from '../Jss/Image';
import { Child, Notes, TitleInfo } from '../Jss/Text';
import { ButtonDisLike, ButtonLike } from '../Jss/Button';

export default function Home(props) {
    let [stateLike, setLike] = useState({like: 0});
    let [stateDislike, setDislike] = useState({like: 0,dislike: 0});
    const handleLike = () => {
        return setLike({like: stateLike.like + 1});
    }
    const hanleDislike = () => {
        return setDislike({dislike : stateDislike.dislike + 1});
    }
  return (
    <SectionMain>
        <DivCard>
            <DivImage>
                <ImageInfo src={"https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/42453321_2577475492266504_77795902273617920_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=6qVb9Y7dth4AX9H3fOz&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDFD_1HtcJh-jOoFqRGjrp70ske3mIGh_flnSs_zsESXw&oe=64F4C4C2"} alt={"meme"}/>
            </DivImage>
            <DivTitle>
                <TitleInfo>Lorem ipsum dolor sit.</TitleInfo>
                <DivShow>
                    <Child style={{color:"#B71C1C"}}>{stateLike.like} <i className="fa fa-heart"/></Child>
                    <Child style={{color:"#000"}}>{stateDislike.dislike} <i className="fa fa-heart-broken"/></Child>
                </DivShow>
            </DivTitle>
            <DivInfo>
                <Notes>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus officiis, veritatis error corrupti vel.</Notes>
            </DivInfo>
            <DivButton>
                <ButtonLike type="button" onClick={() => {handleLike()}}>Like <i className="fa fa-heart"/></ButtonLike>
                <ButtonDisLike type="button" onClick={() => {hanleDislike()}}>DisLike <i className="fa fa-heart-broken" /></ButtonDisLike>
            </DivButton>
        </DivCard>
    </SectionMain>
  )
};