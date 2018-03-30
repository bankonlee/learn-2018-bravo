import React, { Component } from 'react';
import luke from './luke.png';
class Player1 extends Component {
	render(){
		return(
			<div className="BoxInner1">
				<img src={luke} className="Player1" alt="" />
			</div>
		)
	}
}
export default Player1
