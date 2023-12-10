import React from 'react';
import Body from "./components/Body";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Body/>
      </Provider>
    </div>
  )
}

export default App