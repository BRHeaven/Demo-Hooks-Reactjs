/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React, { useReducer } from 'react'
import { Hooks } from '../Jss/Section'
import { DivButtonCard, DivCard, DivItemCard, DivListCard, DivTitle } from '../Jss/Div'
import { TextCard, TitleInfo } from '../Jss/Text';
import { ButtonAddCart, ButtonDeleteItem } from '../Jss/Button';
let objectAPI = [
    {id:1,name:"Valdal",price:2900},
    {id:2,name:"Phantom",price:2900}
];
let cart = [];
let handleReducer = (stateReducer, action) => {
    switch(action.type) {
        case "addCart": {
            let updateState = cart;
            let index = updateState.findIndex( item => item.id === action.item.id );
            if ( index !== -1 ) {
                return;
            }
            updateState.push(action.item);
            stateReducer = updateState;
            return {...stateReducer};
        }; break;
        case "deleteItem": {
            let updateState = cart;
            let index = updateState.findIndex( item => item.id === action.item.id );
            if ( index !== -1 ) {
                updateState.splice(index,1);
            }
            stateReducer = updateState;
            return {...stateReducer};
        }; break;
        default: break;
    }
    return { ...stateReducer };
}
export default function HookUseReducer() {
    const [state,dispatch] = useReducer(handleReducer,cart);
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
        return cart.map((object,index)=>{
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
        if (cart.length < 1) {
            return;
        } 
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
                <TitleInfo>useReducer</TitleInfo>    
            </DivTitle>
            <DivListCard>
                {renderCard()}
            </DivListCard>
            {renderListCart()}
        </DivCard>
    </Hooks>
  )
}
