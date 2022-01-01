import Header from 'components/Header'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetshArticles } from 'redux/ducks/articles'

import './App.css'

function App() {
  const load = useSelector((state) => state.load)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetshArticles())
  }, [])

  if (load) {
    return <div>Loading ...</div>
  }

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
