import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectArticles } from 'redux/ducks/articles'
import ArticlePreview from './Article-preview'

const Content = () => {
  const articles = useSelector(selectArticles)

  return (
    <Grid container spacing={2}>
      {articles.map(({ id, title, imageUrl, summary }) => {
        return (
          <ArticlePreview
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            summary={summary}
          />
        )
      })}
    </Grid>
  )
}

export default Content
