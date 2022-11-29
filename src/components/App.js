import React from "react";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from '../redux/configureStore';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes >
          <Route exact path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App
