import React from 'react';
import { Route, BrowserRouter as Router, Link, useParams } from 'react-router-dom';

function Account() {
	const { account } = useParams();
	return <h3>ID : {account}</h3>;
}

export default function App() {
	return (
		<Router>
			<React.Fragment>
				<h3>Accounts</h3>
				<Link to="/">Home</Link>
				<ul>
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
			<Route path="/" exact />
			<Route path="/netflix">I am Netflix</Route>
			<Route path="/zillow-group">I am Zillow Group</Route>
			<Route path="/yahoo">I am Yahoo</Route>
			<Route path="/modus-create">I am Modus Create</Route>
		</Router>
	);
}
