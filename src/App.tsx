import React from 'react';
import { Provider } from 'react-redux';
import Tasks from './screens/tasks/Tasks';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
