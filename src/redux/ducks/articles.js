import { takeEvery, call, put } from 'redux-saga/effects'

// Actions
const ARTICLES_FETCH = 'ARTICLES_FETCH'
const ARTICLES_FETCHED = 'ARTICLES_FETCHED'
const ARTICLES_FETCH_ERROR = 'ARTICLES_FETCH_ERROR'

// Reducer

const initialState = {
  load: false,
  articles: [],
  error: null,
  filterText: null,
  page: 1,
}

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_FETCH:
      return { ...state, load: false }
    case ARTICLES_FETCHED:
      return { ...state, load: false, articles: action.payload }
    case ARTICLES_FETCH_ERROR:
      return { ...state, load: false, error: action.payload }
    default:
      return state
  }
}

// Action creators

export const fetshArticles = () => {
  return { type: ARTICLES_FETCH }
}

export const articlesFetched = (articles) => {
  return { type: ARTICLES_FETCHED, payload: articles }
}

// api request functions

async function fetchArticles() {
  const res = await fetch(
    'https://api.spaceflightnewsapi.net/v3/articles?_limit=6'
  )
  const data = await res.json()
  return data
}

// Sagas

export function* workerArticlesSaga() {
  const data = yield call(fetchArticles)

  yield put(articlesFetched(data))
}

export function* watchArticlesSaga() {
  yield takeEvery(ARTICLES_FETCH, workerArticlesSaga)
}
