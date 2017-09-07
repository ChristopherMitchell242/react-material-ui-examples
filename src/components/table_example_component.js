import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class TableExample extends Component {
	render() { 
		return (
			<div>
				<h1>TableExample!!!</h1>
				<Link to="/pageTwo">Next</Link>
			</div>
		) 
	}
}

export default TableExample;