import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

/* MATERIAL UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

/* ICONS */
import FontIcon from 'material-ui/FontIcon';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconBuisness from 'material-ui/svg-icons/communication/business';
import IconEmail from 'material-ui/svg-icons/communication/email';
import IconGroup from 'material-ui/svg-icons/social/group';

import reducers from './reducers';

import FormExample from './components/form_example_component'
import GridExample  from './components/grid_example_component'
import TableExample from './components/table_example_component'

import { buttonFactory } from './factories/buttons'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const iconLocationOn = <IconLocationOn />;
const iconBuisness = <IconBuisness />;
const iconEmail = <IconEmail />;
const iconGroup = <IconGroup />;

class App extends Component {
	constructor(props) { super(props); }
	handleTouchTap() {console.log('handleTouchTap')}
	login() { console.log('login') }
	toggleBurgerBar() { console.log('toggleBurgerBar') }

	

	render() { 

		const styles = {
			tabs: {
				fontSize: 12,
				paddingTop: 4,
    			marginBottom: 4,
				fontWeight: 100,
			}
		};
		
		function handleActive(tab) {  console.log('Tab Clicked') }

		return (
			<BrowserRouter>
				<div>
					<AppBar title="Material Design Showcase" iconElementRight={ buttonFactory('save', () => this.login.bind(this)) } onLeftIconButtonTouchTap={this.toggleBurgerBar} onTitleTouchTap={ this.handleTouchTap }  />

					<div>
						<Tabs>
						    <Tab style={styles.tabs} label="Forms and Inputs" containerElement={<Link to="/" />} onActive={handleActive}></Tab>
				    		<Tab style={styles.tabs} label="Tables and Data"  containerElement={<Link to="/table" />} onActive={handleActive}></Tab>
				    		<Tab style={styles.tabs} label="Grids and Lists"  containerElement={<Link to="/grid" />} onActive={handleActive} ></Tab>
			  			</Tabs>
		  			</div>

					<Switch>
						<Route path="/table" component={TableExample}></Route>
						<Route path="/grid" component={GridExample}></Route>
						<Route path="/" component={FormExample}></Route>
					</Switch>

					
					<BottomNavigation className="footer bottom-navbar navbar-thick">
          				<BottomNavigationItem label="Places" 		icon={iconLocationOn} 	onClick={() => console.log('click')} />
          				<BottomNavigationItem label="Investors" 	icon={iconBuisness}  	onClick={() => console.log('click')} />
          				<BottomNavigationItem label="Applications" 	icon={iconEmail} 		onClick={() => console.log('click')} />
          				<BottomNavigationItem label="Connections" 	icon={iconGroup} 		onClick={() => console.log('click')} />
        			</BottomNavigation>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</Provider>, 
	document.querySelector('.container-fluid')
);


// 
