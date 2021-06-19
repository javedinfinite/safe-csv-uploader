import React from "react";
import "./App.css";
import SearchAppBar from "./components/Appbar";
import ViewEmployees from "./components/ViewEmployee";
import uoloadEmployees from "./components/UploadEmployee";
import { Provider } from 'react-redux';
import store from './store'

import {
  Switch,
  Route,
  HashRouter,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}> 
    <HashRouter>
      <div style={{ flexGrow: 1 }}>
        <SearchAppBar />
        <Switch>
          <Route exact path="/" component={uoloadEmployees} />
          <Route path="/viewEmployees" component={ViewEmployees} />
        </Switch>
      </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
