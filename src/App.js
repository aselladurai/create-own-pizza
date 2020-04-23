import React from 'react';
import Header from './components/Header';
import PizzaBuilderContainer from './components/PizzaBuilderContainer';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <PizzaBuilderContainer />
      </div>
    </Provider>
  );
}

export default App;
