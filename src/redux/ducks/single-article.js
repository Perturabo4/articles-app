import { takeEvery, call, put, select } from 'redux-saga/effects'

// Actions
const SINGLE_ARTICLE_FETCH = 'SINGLE_ARTICLE_FETCH'
const SINGLE_ARTICLE_FETCHED = 'SINGLE_ARTICLE_FETCHED'
const SINGLE_ARTICLE_FETCH_ERROR = 'SINGLE_ARTICLE_FETCH_ERROR'

// Reducer

const initialState = {
  load: false,
  article: null,
  error: null,
  id: null,
}

export default function singleArticleReducer(state = initialState, action) {
  switch (action.type) {
    case SINGLE_ARTICLE_FETCH:
      return { ...state, load: true, id: action.payload }
    case SINGLE_ARTICLE_FETCHED:
      return { ...state, load: false, article: action.payload }
    case SINGLE_ARTICLE_FETCH_ERROR:
      return { ...state, load: false, error: action.payload }
    default:
      return state
  }
}

// Action creators

export const singleArticleFetch = (id) => {
  return { type: SINGLE_ARTICLE_FETCH, payload: id }
}

export const singleArticleFetched = (article) => {
  return { type: SINGLE_ARTICLE_FETCHED, payload: article }
}

// selectors

export const selectArticle = (state) => state.singleArticle.article
export const selectArticleLoad = (state) => state.singleArticle.load
export const selectArticleId = (state) => state.singleArticle.id

// api request functions
async function fetchArticle(id) {
  const res = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles/${id}`
  )
  const data = await res.json()
  return data
}

// Sagas

export function* workerSingleArticleSaga() {
  const id = yield select(selectArticleId)

  console.log('Saga id: ' + id)

  const data = yield call(fetchArticle, id)

  yield put(singleArticleFetched(data))
}

export function* watchSingleArticleSaga() {
  yield takeEvery(SINGLE_ARTICLE_FETCH, workerSingleArticleSaga)
}
