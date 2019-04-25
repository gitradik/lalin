import React from 'react';
import styles from  './app.module.sass';
import browserHistory from './utils/browserHistory';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter history={browserHistory} basename={process.env.PUBLIC_URL}>
        <div className={styles.app}>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
