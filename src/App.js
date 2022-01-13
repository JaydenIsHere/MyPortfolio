import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThankYou from './pages/ThankYou'
import VideoProject from './pages/VideoProject'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />}></Route>
          <Route path='/thankyou' element={<ThankYou />}></Route>
          <Route path='/videoproject' element={<VideoProject />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
