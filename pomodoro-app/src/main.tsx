import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
    <BrowserRouter >
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );

/*ReactDOM.createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
  <React.StrictMode>
   <App />
  </React.StrictMode>
 </Provider>
);
*/