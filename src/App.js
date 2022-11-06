import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/Front-End-Stage-1-Task' element={<Profile />} />
          <Route path='/Front-End-Stage-1-Task/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
