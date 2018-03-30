import React, { Component } from 'react';
import Box from './Box.js';

class Grid extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 1,
			box: ["","","","","","","","",""],
			currentPlayer: "X"
		}
	}

	// create a method that runs onclick
	click(id) {
		// get values from state
		let {box, count} = this.state

		// this is short for:
		// let box = this.state.box
		// let count = this.state.count

		// stop double click from adding to count or changing player
		if(box[id] === "player1" || box[id] === "player2"){
			return
		}

		// determine whether count is odd or even, then assign the correct player to that box
		if(count %2 === 0) {
			box[id] = "O"
		} else if(count %2 !== 0) {
			box[id] = "X"
		}

		// in this method, increment the total click count
		this.setState({count: count + 1, box: box});
		console.log(this.state);
	}


    // then, if click count is odd -- set user1 logo
    // else -- set user2logo

    render(){

        return(
            <div className="Grid">
                <div className="GridRow">
                    <div className="Box 0 " onClick={this.click.bind(this, '0')}>
						<Box />
						{this.state.box[0]}
                    </div>
                    <div className="Box 1" onClick={this.click.bind(this, '1')}>
						<Box />
						{this.state.box[1]}
                    </div>
                    <div className="Box 2" onClick={this.click.bind(this, '2')}><Box />
						{this.state.box[2]}
                    </div>
                </div>
                <div className="GridRow">
                    <div className="Box 3" onClick={this.click.bind(this, '3')}><Box />
						{this.state.box[3]}
                    </div>
                    <div className="Box 4" onClick={this.click.bind(this, '4')}><Box />
						{this.state.box[4]}
                    </div>
                    <div className="Box 5" onClick={this.click.bind(this, '5')}><Box />
						{this.state.box[5]}
                    </div>
                </div>
                <div className="GridRow">
                    <div className="Box 6" onClick={this.click.bind(this, '6')}><Box />
						{this.state.box[6]}
                    </div>
                    <div className="Box 7" onClick={this.click.bind(this, '7')}><Box />
						{this.state.box[7]}
                    </div>
                    <div className="Box 8" onClick={this.click.bind(this, '8')}><Box />
						{this.state.box[8]}
                    </div>
                </div>
            </div>
        );

    }
}
export default Grid
