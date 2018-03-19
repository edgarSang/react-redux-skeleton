import React from 'react';
import { Header } from '../components';
import { Home, Test } from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    render(){
        return (
        <Router>
            <div>
              <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Test' component={Test}/>
                </Switch>
            </div>
        </Router>    
        );
    }
}

export default App;
