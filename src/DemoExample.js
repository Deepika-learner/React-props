import React from 'react'

class DemoExample extends React.Component{
	state={
			s:this.props.name,
			d:this.props.class
		}
	render(){
		return(
				<div>
					<p>{this.state.s}</p>
					<p>{this.state.d}</p>
					<h1>{this.props.name}</h1>
					<p>{this.props.class}</p>
				</div>
			)
	}
}

export default DemoExample