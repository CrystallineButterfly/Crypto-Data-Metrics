import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Header from '../Components/Header';

it('Test to see if header renders correctly', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
