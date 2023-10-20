import { Provider as ReduxProvider } from 'react-redux';

import { Router } from './routes';
import { store } from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;
