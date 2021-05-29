import React, { useEffect } from 'react';
import ColorBox from '../presentations/ColorBox';
import useRecords from '../hooks/useRecords';
const randomColor = require('randomcolor');

const MainPageContainer = () => { 
  const [color, setColor, colorHistory] = useRecords([]);
  
  useEffect(() => { 
    setColor(generateRandomColor());
  }, []);
    
  const generateRandomColor = () => { 
    const color = randomColor();
    return color;
  };
    
  const changeNewColor = () => { 
    setColor(generateRandomColor());
  };

 

  return (
    <div>
      <ColorBox color={color}/>
      <br/>
      <br/>
      <button onClick={e => {
        e.preventDefault();
        colorHistory.undo();
      }}
      disabled={!colorHistory.hasUndo}
      >UNDO
      </button>

      <button onClick={ e => { 
        e.preventDefault();
        colorHistory.redo();
      }}
      disabled={!colorHistory.hasRedo}
      >REDO
      </button>

      <br/>
      <br/>
      <button onClick={() => changeNewColor()}>New Color</button>
      <p>Current Hex: {color}</p>
    </div>
  );
};

export default MainPageContainer;
