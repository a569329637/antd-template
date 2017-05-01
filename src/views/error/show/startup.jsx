import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ErrorPageComponent from './components/ErrorPageComponent.jsx';

function ErrorPage() {
  return (
    <Provider store={ErrorPageSotre}>
      <ErrorPageComponent />
    </Provider>
  );
}

function ErrorPageSotre() {
  return createStore(reducers, {});
}

export default ErrorPage;
