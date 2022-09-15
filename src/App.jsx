import React, { useState } from 'react'
import './App.css'
import Header from "./Components/Header"
import Home from "./File/Home"
import Create from "./File/Create"
import Notes from "./File/Notes"
import { Routes, Route } from 'react-router-dom'

function App() {
  const [notes, setNotes] = useState([])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' > 
          <Home />
        </Route>
        <Route path='/create'>
          <Create setNotes={setNotes} notes={notes} />
        </Route>
        <Route setNotes={setNotes} path='notes'>
          <Notes />
        </Route>
      </Routes>
    </div>
  )
}

export default App






