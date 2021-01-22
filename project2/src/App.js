import React from 'react';
import { Route, BrowserRouter as Router, Link, useParams } from 'react-router-dom';
import URLParametes from './Code/URL_Parameters';
import './App.css';

const Account = () => {
	const { account } = useParams();
	if (account !== 'home') {
		return (
			<React.Fragment>
				<header className="site-header">{account}</header>
				<main>This page belongs to ID : {account}. More details coming soon.</main>
				<footer>{account} copyright</footer>
			</React.Fragment>
		);
	} else if (account === 'home') {
		return <h3>HOME</h3>;
	}
};

export default function App() {
	return (
		<Router>
			<URLParametes />
			<React.Fragment>
				<h3>Accounts</h3>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/netflix">Netflix</Link>
					</li>
					<li>
						<Link to="/zillow-group">Zillow Group</Link>
					</li>
					<li>
						<Link to="/yahoo">Yahoo</Link>
					</li>
					<li>
						<Link to="/modus-create">Modus Create</Link>
					</li>
				</ul>
			</React.Fragment>
			{/* <Route path="/" exact />
			<Route path="/netflix">I am Netflix</Route>
			<Route path="/zillow-group">I am Zillow Group</Route>
			<Route path="/yahoo">I am Yahoo</Route>
			<Route path="/modus-create">I am Modus Create</Route> */}

			{/* <Route path="/:account">
				<Account />
			</Route> */}
		</Router>
	);
}
