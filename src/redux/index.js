import { createStore, applyMiddleware } from 'redux'
import articlesReducer from 'redux/ducks/articles'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { watchArticlesSaga } from 'redux/ducks/articles'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  articlesReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watchArticlesSaga)

export default store
