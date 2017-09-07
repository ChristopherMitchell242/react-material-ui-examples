import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class GridExample extends Component {
	render() { 
		return (
			<div>
				<h1>GridExample!!!</h1> 
				<Link to="/">Back to Home</Link>
			</div>
		) 
	}
}

export default GridExample;