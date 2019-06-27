import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import {Operation as OperationData} from './reducer/data/data';
import {Operation as OperationUser} from './reducer/user/user';
import {createAPI} from './api';
import App from './components/App/App.jsx';
import reducer from './reducer/reducer';
import WithAuth from './components/hocs/WithAuth/WithAuth';

async function init() {
  const api = createAPI();

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  await store.dispatch(OperationData.loadData());
  await store.dispatch(OperationUser.checkLoginUser());
  ReactDOM.render(
      <Provider store={store}>
        <WithAuth>
          <App/>
        </WithAuth>
      </Provider>,
      document.getElementById(`root`)
  );
}

init();
