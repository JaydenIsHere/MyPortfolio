import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
