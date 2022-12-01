import React from 'react'

class StateExample extends React.Component{
	state={
			name:"ReactJS",
			year:2013
	}
	render(){
	    return(
			<div>
				<p>{this.state.name} </p>
				<p>{this.state.year}</p>
			</div>
		)
	}
}

export default StateExample