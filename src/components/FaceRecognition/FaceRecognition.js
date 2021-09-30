import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box ,celebrityName}) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
        { celebrityName !==''
         ?
        <h6 className='celebrityNameClass'>{celebrityName}</h6>
        :
        <h6></h6>
        }
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;