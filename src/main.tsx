// react
import ReactDOM from 'react-dom/client';

// redux
import { Provider } from 'react-redux';

// components
import App from './App/App.tsx';

// store
import store from './Store/store.ts';

// styles
import './Styles/main.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
    <Provider store={store}>
        <App />
    </Provider>
);
