import React from 'react'

function JSX(){
	/*return(
			<div>
				<h1>Good Aternoon</h1>
			</div>
		)*/
	return React.createElement(
			"div",
			{id:"one",className:"classone"},
			React.createElement("h1",null,"Good Afternoon")
			)
}

export default JSX