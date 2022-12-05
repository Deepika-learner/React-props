import {Link} from 'react-router-dom'
import '../App.css'

function Navbar(){
	return(
			<div className="nav">
				<Link to="/" className="opt">Home</Link>
				<Link to="/contact" className="opt">Contact</Link>
				<Link to="/about" className="opt">About</Link>
			</div>
		)
}


export default Navbar