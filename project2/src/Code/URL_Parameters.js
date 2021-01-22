/**
 * Create 2 routes so that the given navigation works and the proper UI is displayed.
 * When the user navigates to /tyler, they should see "Student:tyler"
 * When the user navigates to /invoices/1, they should see "Invoice #1"
 * 
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

const Student = () => {
	const { student } = useParams();
	return <h3>Student : {student}</h3>;
};

const Invoice = () => {
	const { id } = useParams();
	return <h3>Invoice #{id}</h3>;
};

export default function URL_Parameters() {
	return (
		<Router>
			<div>
				<h3>Invoices</h3>
				<ul>
					<li>
						<Link to="/invoice/1">1</Link>
					</li>
					<li>
						<Link to="/invoice/2">2</Link>
					</li>
					<li>
						<Link to="/invoice/3">3</Link>
					</li>
					<li>
						<Link to="/invoice/4">4</Link>
					</li>
				</ul>
			</div>
			<div>
				<h3>Student</h3>
				<ul>
					<li>
						<Link to="/tyler">Tyler</Link>
					</li>
					<li>
						<Link to="/mark">Mark</Link>
					</li>
					<li>
						<Link to="/lisa">Lisa</Link>
					</li>
					<li>
						<Link to="/ryder">Ryder</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/:student">
					<Student />
				</Route>
				<Route path="/invoice/:id">
					<Invoice />
				</Route>
			</Switch>
		</Router>
	);
}
