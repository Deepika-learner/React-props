import React from 'react'

class PropsExample extends React.Component{
	render(){
		console.log(this.props)
		return(
			<div>
				this is from props component
				<p>name:{this.props.name}</p>
				<p>rollno:{this.props.rollno}</p>
			</div>
		)
	}
}

export default PropsExample