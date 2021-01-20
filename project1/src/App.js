import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/About" component={About} />
			</Switch>
			<nav>
				<ul>
					<li>
						<NavLink to="/" exact activeClassName="is-active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" activeClassName="is-active">
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</Router>
	);
}

export default App;
