import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Courses from './components/Courses';
import './App.css';

const client = new ApolloClient({
  uri:"https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client= {client}>
    <div className= "container">
      <nav className ="navbar navbar-dark bg-primary">
        <a href="#" className =" navbar-brand "> React and GraphQL </a>
      </nav>
      <div className="row">
        <h1> React GraphQL </h1>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
)

export default App;
