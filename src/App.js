import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { articlesFetched, fetshArticles } from 'redux/ducks/articles'

function App() {
  const load = useSelector((state) => state.load)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetshArticles())
  }, [])

  if (load) {
    return <div>Loading ...</div>
  }

  return <div className="App"></div>
}

export default App
