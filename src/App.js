import React from 'react';
import styles from  './app.module.sass';
import Home from "./pages/Home/Home";
import { Route, Switch } from 'react-router-dom';

class Product extends React.Component {
    render() {
        return (
            <div>
                <h1>LALALALALA</h1>
            </div>
        );
    }
}

function App() {

  return (
        <div className={styles.app}>
            <Switch>
                <Route exact path="/product" render={ (routerProps) => <Product routerProps={routerProps} />} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
  );
}

export default App;
