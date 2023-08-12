import React, { useRef, useState } from 'react'
import { Hooks } from '../Jss/Section'
import { DivButton, DivCard, DivInfo, DivInput, DivTitle } from '../Jss/Div'
import { Notes, TitleInfo } from '../Jss/Text'
import { Form } from '../Jss/Form'
import { Input } from '../Jss/Input'
import { ButtonDefault } from '../Jss/Button'

export default function HookUseRef() {
    // useRef được sử dụng để lưu trữ các biến, hàm, mảng và object sau mỗi lần render.
    let inputRef = useRef(null);
    let [value, setValue] = useState({input: ''});
    const handleValue = () => {
        console.log("");
        console.log("useRef : " + inputRef.current.value);
        console.log("");
    }
  return (
    <Hooks>
        <DivCard>
            <DivTitle>
                <TitleInfo>useRef</TitleInfo>
            </DivTitle>
            <Form>
                <DivInput>
                    <input ref={inputRef} name="inputRef" onChange={(i) => {setValue({input : i.target.value})}} style={{display:"block",padding:"2px 5px",margin:"10px auto"}}/>
                </DivInput>
                <DivButton>
                    <ButtonDefault type='button' onClick={()=>{handleValue()}}>Click</ButtonDefault>
                </DivButton>
            </Form>
            <DivInfo>
                <Notes></Notes>
            </DivInfo>
        </DivCard>
    </Hooks>
  )
}
