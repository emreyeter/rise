import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-responsive-modal/styles.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <App />
);
