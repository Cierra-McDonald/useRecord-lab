import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ color }) => { 
	return (
		<div>
			<div style={{ width: '450px', height: '450px', backgroundColor:color}}>
			
			</div>
		</div>
	);

};

ColorBox.propTypes = { 
	color: PropTypes.string.isRequired
};

export default ColorBox;
