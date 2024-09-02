import './App.css'
import Homes from './Routes/Homes'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Cards from './Components/Cards'
function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Nav />
      </div>
      <div className="main-content">
        <Header />
        <Homes />
        <Cards />
      </div>
    </div>
  )
}

export default App
