import React from 'react';
import Blog from "./Blog";
import Venta from "./Ventas/Venta"
import { Provider as ReduxProvider } from "react-redux";
import store from "../Redux/store";

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


//const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {

  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path='/productos'
              component={Blog} />
            <Route
              exact
              path='/ventas'
              component={Venta} />
          </Switch>
        </Router>
      </div>
    </ReduxProvider>
  );
}

export default App;
