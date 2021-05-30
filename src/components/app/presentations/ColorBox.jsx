import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorBox.css';

const ColorBox = ({ color }) => { 
  return (
    <div>
      <div style={{ width: '450px', height: '450px', backgroundColor:color }}
	  	className={styles.colorBox}>
			
      </div>
    </div>
  );

};

ColorBox.propTypes = { 
  color: PropTypes.array.isRequired
};

export default ColorBox;
