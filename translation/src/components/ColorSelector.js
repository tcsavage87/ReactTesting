import React from 'react';

class ColorSelector extends React.Component {
	render() {
		return (
			<div>
	        	Select a color:
	        	<i 
	       			className="circle icon red" 
	       			onClick={() => this.props.onColorChange('red')} 
	       			style={{cursor: 'pointer'}}
				/>
        		<i 
         			className="circle icon blue" 
        			onClick={() => this.props.onColorChange('blue')}
        			style={{cursor: 'pointer'}}
				 />
        	</div>
        );
    }
}

export default ColorSelector;