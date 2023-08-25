import React, { useContext } from 'react'
import { context } from './HookContextProvider'
import { Hooks } from '../Jss/Section';
import { DivButtonCard, DivCard, DivItemCard, DivListCard, DivTitle } from '../Jss/Div';
import { TextCard, TitleInfo } from '../Jss/Text';
import { ButtonAddCart, ButtonDeleteItem } from '../Jss/Button';

let objectAPI = [
    {id:1,name:"AKM",price:3700},
    {id:2,name:"M4",price:3100}
];

export default function HookUseContext(props) {
    let {cartReducer} = useContext(context);
    let [state,dispatch] = cartReducer;
    const renderCard = () => {
        return objectAPI.map((object,index)=>{
            return (
                <DivItemCard key={index}>
                    <TextCard>{object.name}</TextCard>
                    <DivButtonCard>
                        <ButtonAddCart type='button' onClick={()=>{dispatch({type:"addCart",item:object})}}>+</ButtonAddCart>
                    </DivButtonCard>
                </DivItemCard>
            );
        });
    };
    const renderCart = () => {
        return state.cart.map((object,index)=>{
            return (
                <DivItemCard key={index}>
                    <TextCard>{object.name}</TextCard>
                    <DivButtonCard>   
                        <ButtonDeleteItem type='button' onClick={()=>{dispatch({type:"deleteItem",item:object})}}>x</ButtonDeleteItem>
                    </DivButtonCard>
                </DivItemCard>
            );
        });
    };
    const renderListCart = () => {
        if (state.cart.length < 1) {
            return;
        };
        return (
            <DivListCard>
            {renderCart()}
            </DivListCard>
        )
    };
  return (
    <Hooks>
        <DivCard>
            <DivTitle>
                <TitleInfo>useContext</TitleInfo>
            </DivTitle>
            <DivListCard>
                {renderCard()}
            </DivListCard>
            {renderListCart()}
        </DivCard>
    </Hooks>
  )
}
