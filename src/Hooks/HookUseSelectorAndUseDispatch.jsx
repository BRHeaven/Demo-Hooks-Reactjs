import React, { useState } from 'react';
import { Hooks } from '../Jss/Section';
import { DivAvatar, DivInput, DivMessage, DivTitle, DivUser, DivUserMessage } from '../Jss/Div';
import { TextMessage, TextName, TitleInfo } from '../Jss/Text';
import { ImageAvatar } from '../Jss/Image';
import { FormMessage } from '../Jss/Form';
import { Label } from '../Jss/Label';
import { InputMessage } from '../Jss/Input';
import { ButtonMessage } from '../Jss/Button';
import { useDispatch, useSelector } from 'react-redux';
import { handleMessage } from '../Redux/Actions/mainActions';

export default function HookUseSelectorAndUseDispatch(props) {
    let chat = useSelector(state => state.handleReducer.chat);
    let dispatch = useDispatch();
    let [userChat,setUserChat] = useState({
        name:'',
        message:''
    });
    const handleChange = (e) => {
        let {name,value} = e.target;
        setUserChat({...userChat,[name]:value});
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Chăn browser reload
        dispatch(handleMessage(userChat));
    }
    const renderMessage = () => {
        return chat.map((object,index) => {
            return (
                <DivUser key={index}>
                    <DivAvatar>
                        <ImageAvatar src={object.src} alt={object.id}/>
                    </DivAvatar>
                    <DivUserMessage>
                        <TextName>{object.name}</TextName>
                        <TextMessage>{object.text}</TextMessage>
                    </DivUserMessage>
                </DivUser>
            );
        });
    };
  return (
    <Hooks>
        <DivTitle>
            <TitleInfo>useSelector && useDispatch</TitleInfo>
        </DivTitle>
        <DivMessage>
            {renderMessage()}
        </DivMessage>
        <FormMessage onSubmit={handleSubmit}>
            <DivInput>
                <Label forId={"name"}>name</Label>
                <InputMessage id="name" name="name" placeholder="BRHeaven" onChange={handleChange}/>
            </DivInput>
            <DivInput>
                <Label forId={"message"}>message</Label>
                <InputMessage id="message" name="message" placeholder="Hello World" onChange={handleChange}/>
            </DivInput>
            <ButtonMessage type="submit">send message</ButtonMessage>
        </FormMessage>
    </Hooks>
  )
};
