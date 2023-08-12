import React, {useMemo, useState} from 'react';
import { Hooks } from '../Jss/Section';
import { DivButton, DivCard, DivInfo, DivTitle } from '../Jss/Div';
import { TitleInfo } from '../Jss/Text';
import { ButtonDefault } from '../Jss/Button';
import HookUseMemoChild from './HookUseMemoChild';

export default function HookUseMemo(props) {
    let [number, setNumber] = useState({value: 0});
    const object = () => {
        let list = [{name:"Ben",year:2002},
                    {name:"Jin",year:1998},
                    {name:"Jack",year:1998},
                    {name:"Mato",year:1995}
                ];
        return list;
    };
    // giống với useCallback nhưng nó dùng cho các biến là object thay vì hàm như useCallback.
    let meMoObject = useMemo(object,[]);
  return (
    <Hooks>
        <DivCard>
            <DivTitle>
                <TitleInfo>useMemo</TitleInfo>
            </DivTitle>
            <DivButton>
                <ButtonDefault onClick={()=>{setNumber({value : number + 1})}}>Click</ButtonDefault>
            </DivButton>
            <DivInfo>
                <HookUseMemoChild list={meMoObject}/>
            </DivInfo>
        </DivCard>
    </Hooks>
  )
};
