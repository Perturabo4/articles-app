import React from 'react'
import { useSelector } from 'react-redux'
import { selectArticles } from 'redux/ducks/articles'
import ArticlePreview from './Article-preview'

const Content = () => {
  const articles = useSelector(selectArticles)

  return articles.map(({ id, title, imgUrl, summary }) => {
    return (
      <ArticlePreview id={id} title={title} imgUrl={imgUrl} summary={summary} />
    )
  })
}

export default Content
