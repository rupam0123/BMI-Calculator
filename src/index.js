import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {store} from './store'
import { Provider } from "react-redux";
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <Home/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

