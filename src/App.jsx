import './App.css'
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AddTransaction from './components/AddTransaction';
import NavigationBar from './components/NavigationBar';
import { AuthContext } from './contexts/AuthContext';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [token, setToken] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/transaction" element={<AddTransaction/>} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
