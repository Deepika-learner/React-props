import {useState} from 'react'

function About(){
	const [village,setVillage]=useState("Penumatsa");
	const [country,setCountry]=useState("INDIA");
	const [password,setPassword]=useState("likki")
	return(
		<div className="content">
			{/*<h1>{country}</h1>
						<p>{village}</p>*/}
			{password}
			<p><input onChange={(e)=>setVillage(e.target.value)} placeholder="Enter village"/></p>
			<input onChange={(d)=>setPassword(d.target.value)} placeholder="Enter password" type="password"/>
			<button onClick={()=>console.log(village,country)}>Submit</button>
		</div>
		)
}

export default About