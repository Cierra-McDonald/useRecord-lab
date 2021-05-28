import React, { useState, useEffect } from 'react';
import ColorBox from '../presentations/ColorBox';
const randomColor = require('randomcolor');

const MainPageContainer = () => { 
    const [color, setColor] = useState('#6CC551');

     const generateRandomColor = () => { 
        const color = randomColor();
        return color;
    };


    useEffect(() => { 
        setColor(generateRandomColor());
    }, []);

    const changeNewColor = () => { 
    
        console.log('in the button');
        setColor(generateRandomColor);
    };

  return (
    <div>
      <h2>MainPage!</h2>
      <ColorBox color={color}/>
      <br/>
      <br/>
      <button>Undo</button>
      <button>Redo</button>
      <br/>
      <br/>
      <button onClick={() => changeNewColor()}>New Color</button>
    </div>
  );
};

export default MainPageContainer;
