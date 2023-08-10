import React, { useState, useCallback } from 'react'
import { Hooks } from '../Jss/Section'
import { DivButton, DivCard, DivInfo, DivTitle } from '../Jss/Div'
import { Notes, TitleInfo } from '../Jss/Text'
import { ButtonDefault } from '../Jss/Button'
import HookUseCallbackChild from './HookUseCallbackChild'

export default function HookUseCallback(props) {
    let [index, setIndex] = useState({number : 0});
    const handleValue = () => {
        return setIndex({number: index.number + 1});
    }
    // Nếu để rỗng [] thì file HookUseCallbackChild chỉ render lần đầu khi chạy xong giao diện.
    // Nếu thêm [like] , khi like thay đổi thì file HookUseCallbackChild sẽ được render lại và lần đầu chạy giao diện.
    // Nếu bỏ [] thì file HookUseCallbackChild sẽ được render lại khi click.
    let callbackRenderImage = useCallback(index.number,[]);
  return (
    <Hooks>
        <DivCard>
            <DivTitle>
                <TitleInfo>useCallback</TitleInfo>
            </DivTitle>
            <DivButton>
                <ButtonDefault onClick={() => {handleValue()}}>Click !</ButtonDefault>
            </DivButton>
            <HookUseCallbackChild value={callbackRenderImage}/>
            <DivInfo>
                <Notes>Xem ghi chú bằng F12</Notes>
            </DivInfo>
        </DivCard>
    </Hooks>
  )
}
