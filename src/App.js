import Home from 'pages/Home'
import SingleArticle from 'pages/Single-article'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api/:id" element={<SingleArticle />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
