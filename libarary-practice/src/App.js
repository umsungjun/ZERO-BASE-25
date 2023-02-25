import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './pages/3-5/Counter';

function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
