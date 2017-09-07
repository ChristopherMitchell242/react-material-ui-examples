import React from 'react';
import FlatButton from 'material-ui/FlatButton';


export function buttonFactory(label, callback) {
	return ( <FlatButton label={label} onClick={ callback } /> )
}

