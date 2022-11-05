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
          <Route path='/'>  
            <Route index element={<Profile />}/>
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
