import NavBar from './components/NavBar'
import Banner from './components/Banner'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'

function App() {

  console.log("live")

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  )
}

export default App
