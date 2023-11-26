import React,{useState} from 'react';
import door from '../img/door.png';
import ZoomingImg from './ZoomImg';

function Door(){
    const [isImgVisible,setImgVisible] = useState(true);
    const handleImageClick = () => {
        setImgVisible(false);
      };
    
    const doorStyle ={
        height : "100vh"
    }
    const random = Math.floor(Math.random() * 3);
    return(
        <div>
            {isImgVisible?(
                <img style={doorStyle} onClick={handleImageClick} src={door} alt="" />
            ): (<ZoomingImg 
                num = {random}
            />)}
        </div>
    )
}

export default Door;