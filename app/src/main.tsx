import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import {store} from './store/configureStore.tsx' ;
import AppRouter from './router/AppRouter.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
    <AppRouter />
    </Provider>
  </React.StrictMode>,
)
