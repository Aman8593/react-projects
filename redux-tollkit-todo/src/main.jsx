
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './Store/Store'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
