import './App.css'
import "bootswatch/dist/lux/bootstrap.min.css"
import Header from './Components/Header'
import Home from './Routes/Home'
import Create from './Routes/Create'
import Notes from './Routes/Notes'

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Create />
      <Notes />
    </div>
  )
}

export default App
