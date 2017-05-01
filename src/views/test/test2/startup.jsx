import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers/index.jsx';
import TestPageComponent from './components/TestPageComponent.jsx';

const TestPageSotre = createStore(reducers);

function TestPage() {
  return (
    <Provider store={TestPageSotre}>
      <TestPageComponent />
    </Provider>
  );
}

export default TestPage;
