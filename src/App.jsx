import { Routes,Route } from 'react-router-dom'
import { Home } from './components/layouts/Home/Home'
import { Products } from './components/Products/Products'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
          <Routes>
            <Route path='/' element = {< Home />} />
            <Route path='/products' element = {< Products />} />
          </Routes>
      </div>
    </>
  )
}

export default App
