import { createStore, applyMiddleware, combineReducers } from 'redux'
import articlesReducer from 'redux/ducks/articles'
import singleArticleReducer, {
  watchSingleArticleSaga,
} from 'redux/ducks/single-article'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { watchArticlesSaga } from 'redux/ducks/articles'
import { all } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  articles: articlesReducer,
  singleArticle: singleArticleReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

function* rootSaga() {
  yield all([watchArticlesSaga(), watchSingleArticleSaga()])
}

sagaMiddleware.run(rootSaga)

export default store
