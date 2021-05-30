import React, { useEffect } from 'react';
import ColorBox from '../presentations/ColorBox';
import useRecords from '../hooks/useRecords';
import styles from './MainContainer.css';
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
      <div className={styles.colorBoxDiv}>
        <ColorBox color={color}/>
      </div>

      <div className={styles.buttonDiv}>
        <button onClick={e => {
          e.preventDefault();
          colorHistory.undo();
        }}
        disabled={!colorHistory.hasUndo}
        className={styles.controls}>
            UNDO
        </button>

        <button onClick={ e => { 
          e.preventDefault();
          colorHistory.redo();
        }}
        disabled={!colorHistory.hasRedo}
        className={styles.controls}
        >
            REDO
        </button>

        <button 
          onClick={() => changeNewColor()}
          className={styles.controls}
        >
            New Color
        </button>
      </div>

      <p className={styles.hexdiv}>Current Hex: {color}</p>
    </div>
  );
};

export default MainPageContainer;
