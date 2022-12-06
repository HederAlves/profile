import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { client } from "./lib/apollo";
import Routes from './lib/routes'
import './style/reset.css'

function App() {

  return (
    <Router>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </React.StrictMode>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
