import React, { useState, useEffect } from 'react';
import '../ZoomingImage.css'; // CSS 파일을 import
import moonImg from '../img/moon.png'
import moonImg2 from '../img/moon2.png'
import moonImg3 from '../img/moon3.png'

function ZoomingImg({
    num
}){
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.5 : 1)); // 크기를 토글
    }, 300); // 5초 간격으로 토글

    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 제거
  }, []);
  const data = [
    moonImg,
    moonImg2,
    moonImg3
  ]
  return (
    <div className="zoom-container">
      <img src={data[num]} alt="Zooming Image" style={{ transform: `scale(${scale})`, height:"600px" }} />
    </div>
  );
};

export default ZoomingImg;
