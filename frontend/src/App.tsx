import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import client from './lib/apollo';
import router from './lib/routes';

function App() {

	return (
		<React.StrictMode>
			<ApolloProvider client={client}>
				<RouterProvider router={router} />
			</ApolloProvider>
		</React.StrictMode>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
