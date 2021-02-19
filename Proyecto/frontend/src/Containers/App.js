import React from 'react';
import Blog from "./Blog";
import Venta from "./Ventas/Venta"
import Reporte from "./Reportes/Reporte"
import Login from "./Login/Login"
import Register from "./Login/Register"
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
            <Route
              exact
              path='/reportes'
              component={Reporte} />
            <Route
              exact
              path='/login'
              component={Login} />
              <Route
              exact
              path='/register'
              component={Register} />

          </Switch>
        </Router>
      </div>
    </ReduxProvider>
  );
}

export default App;
