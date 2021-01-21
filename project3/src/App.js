import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [ counter, setCounter ] = useState(0);
	function incrementCounter() {
		setCounter(counter + 1);
	}

	// Similar to componentDidMount and componentDidUpdate:
	// useEffect(() => {
	// 	// Update the document title using the browser API
	// 	document.title = `You clicked ${counter} times`;
	// 	document.body.style.backgroundColor = '#f00';
	// });

	return (
		<React.Fragment>
			<div id="xyz">My ID Data</div>

			<div className="App">
				{counter}

				<button onClick={incrementCounter}>Click Me </button>
			</div>
		</React.Fragment>
	);
}

export default App;
