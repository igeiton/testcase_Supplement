import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './Store/store.ts';
import './Styles/main.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
