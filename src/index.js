import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './store/modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import create from 'zustand';

const useStore = create((set) => ({

  mintNum: 0,

}));

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>  
  </React.StrictMode>,
  document.getElementById("root")
);



reportWebVitals();
