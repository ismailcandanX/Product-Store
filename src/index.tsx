import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './redux/store';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);