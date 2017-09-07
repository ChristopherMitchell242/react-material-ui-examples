import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Subheader from 'material-ui/Subheader';

import { textFieldFactory } from '../factories/inputs';


class FormExample extends Component {
	render() { 
		return (
			<div>
				<div className="row">
		    		<div className="col-md-12">
		    			<Subheader>Basic Details</Subheader>
			    		<div className="form-column">
			    			{textFieldFactory('First Name')}
			    			{textFieldFactory('Last Name')}
						</div>	
		    		</div>
		    	</div>


		    	<div className="row">
		    		<div className="col-md-6">
		    			<Subheader>Address</Subheader>
			    		<div className="form-column">
			    			{textFieldFactory('Address - Unit / Block ')}
			    			{textFieldFactory('Address - Street')}
			    			{textFieldFactory('Address - Area')}
			    			{textFieldFactory('Address - Post Code')}
			    			{textFieldFactory('Address - State')}
						</div>	
	    			</div>

		    		<div className="col-md-6">
		    			<Subheader>Personal Information</Subheader>
			    		<div className="form-column">
			    			{textFieldFactory('Date Of Birth')}
			    			{textFieldFactory('Passport Number')}
			    			{textFieldFactory('National Insurance Number')}
						</div>	
		    		</div>	
	    		</div>


		    	<div className="row">
		    		<div className="col-md-12">
		    			<Subheader>Contact Details</Subheader>
			    		<div className="form-column">
			    			{textFieldFactory('Email Address')}
			    			{textFieldFactory('Telephone')}
						</div>	
		    		</div>
		    	</div>
			</div>
		) 
	}
}

export default FormExample;


