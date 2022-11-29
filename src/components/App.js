import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../redux/configureStore';
import Greeting from './Greeting';

const App = () => (
  <div>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;
