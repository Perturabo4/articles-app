import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Content from 'components/Content'
import Header from 'components/Header'
import { fetshArticles } from 'redux/ducks/articles'

const Home = () => {
  const load = useSelector((state) => state.load)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetshArticles())
  }, [])

  if (load) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default Home
