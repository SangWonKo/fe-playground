import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import basketReducer from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  basket: basketReducer,
});

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
