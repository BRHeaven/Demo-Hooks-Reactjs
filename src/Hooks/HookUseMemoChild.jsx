import React from 'react'
import { Notes } from '../Jss/Text';
import { DivInfo, DivText } from '../Jss/Div';

export default function HookUseMemoChild(props) {
  console.log("");
  console.log("render useMemo");
  console.log("");
    const renderObject = () => {
        return props.list.map((object,index) => {
            return (
              <DivText key={index}>
                    <Notes>{object.name}</Notes>
                    <Notes>Year {object.year}</Notes>
              </DivText>
            );
        });
    };
  return (
    <DivInfo>
        {renderObject()}
    </DivInfo>
  );
}
