import React from 'react';
import ColorContext from '../contexts/ColorContext';

class ColorSelector extends React.Component {
	static contextType = ColorContext;
	
	render() {
		return (
			<div>
	        	Select a color:
	        	<i 
	       			className="circle icon red" 
	       			onClick={() => this.context.onColorChange('red')} 
	       			style={{cursor: 'pointer'}}
				/>
        		<i 
         			className="circle icon blue" 
        			onClick={() => this.context.onColorChange('blue')}
        			style={{cursor: 'pointer'}}
				 />
        	</div>
        );
    }
}

export default ColorSelector;