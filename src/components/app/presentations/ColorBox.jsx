import React from 'react';
import styles from './ColorBox.css';

const ColorBox = ({ color }) => { 
  return (
    <div>
      <figure style={{ width: '450px', height: '450px', backgroundColor:color }}
        className={styles.colorBox} aria-label="color-box">	
      </figure>
    </div>
  );

};

// ColorBox.propTypes = { 
//   color: PropTypes.array.isRequired
// };

export default ColorBox;
