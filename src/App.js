import React from 'react';
import styles from  './app.module.sass';
import Home from "./pages/Home/Home";
import { Route, Switch } from 'react-router-dom';
import Basket from './components/Basket/Basket';

function App() {
  return (
        <div className={styles.app}>
            <Switch>
                <Route exact path="/basket" render={(routerProps) => <Basket routerProps={routerProps} />} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
  );
}

export default App;
