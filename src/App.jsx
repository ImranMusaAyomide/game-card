import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import LandingPage from './pages/LandingPage'
import SignUp from './components/Auth/SignUp'
import BattleArena from './BattleArena'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/arena" element={<BattleArena />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
