import React,{useState} from 'react';
import star from '../img/Star 1.png';

function Text(){
    const starStyle={
        width:"50px",
        height:"50px"
    }
    return(
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           <img src={star} style={starStyle} />
           <p style={{fontSize:"30px"}}>힘내라 세은아</p>
           <img src={star}  style={starStyle}/>
        </div>
    )
}

export default Text;