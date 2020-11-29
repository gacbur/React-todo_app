import React from 'react';
import './App.css';
import './dark.css';
import Todo from './components/Todo'
import { GlobalStateContextProvider } from './context/GlobalStateContext'

const App = () => {

  return (
    <GlobalStateContextProvider>
      <div className="app">
        <div className="app-image-background"></div>
        <Todo />
      </div>
    </GlobalStateContextProvider>
  );
}

export default App;
