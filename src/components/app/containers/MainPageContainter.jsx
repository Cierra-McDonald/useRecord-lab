import React, { useState, useEffect } from 'react';
import ColorBox from '../presentations/ColorBox';

const MainPageContainer = () => { 
    const [ color, setColor ] = useState('#FF0033');

    useEffect(() => { 
        setColor(color);
    }, []);

  return (
    <div>
      <h2>MainPage!</h2>
      <ColorBox color={color}/>
    </div>
  );
};

export default MainPageContainer;
