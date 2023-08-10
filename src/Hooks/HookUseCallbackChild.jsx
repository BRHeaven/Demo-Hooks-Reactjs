import React,{memo} from 'react';
import { DivImage } from '../Jss/Div';
import { ImageInfo } from '../Jss/Image';

function HookUseCallbackChild(props) {
    console.log("");
    console.log("render child useCallback");
    console.log("");
    const renderImage = (index) => {
        if ( index === 0 ) {
            return <ImageInfo src={"https://i.pinimg.com/564x/d2/6d/5e/d26d5e82450d417ee6c635863c495cab.jpg"} alt={"child-1"}/>
        };
        return <ImageInfo src={"https://i.pinimg.com/564x/b9/71/f2/b971f2f7bdbe38e0edbede6a80b6bc7b.jpg"} alt={"child-2"}/>
    };
  return (
    <DivImage>
        {renderImage(props.value)}
    </DivImage>
  )
};
export default memo(HookUseCallbackChild);