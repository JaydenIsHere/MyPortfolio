import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/thankyou' element={<ThankYou />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
