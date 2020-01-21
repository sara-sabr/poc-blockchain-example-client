import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Form } from './Form';
import { Records } from './Records';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
  return (
   <React.Fragment>
   <NavigationBar />
   <Jumbotron/>
   <Layout>
   <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/records" component={Records} />
      <Route component={NoMatch} />
    </Switch>
    </Router>
    </Layout>
   </React.Fragment>
  );
}
}

export default App;
