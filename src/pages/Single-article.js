import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useParams } from 'react-router-dom'
import {
  selectArticle,
  selectArticleLoad,
  singleArticleFetch,
} from 'redux/ducks/single-article'

const SingleArticle = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const load = useSelector(selectArticleLoad)
  const article = useSelector(selectArticle)

  useEffect(() => {
    dispatch(singleArticleFetch(id))
  }, [])

  if (load) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <Link to={'/'}>Back to articles</Link>
    </>
  )
}

export default SingleArticle
