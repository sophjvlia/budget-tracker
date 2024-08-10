import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import ThemeContext from '../contexts/ThemeContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const theme = useContext(ThemeContext).theme;

  function login(e) {
    e.preventDefault();
    const isCorrectEmail = email === 'guest@email.com';
    const isCorrectPassword = password === 'password';
    if (isCorrectEmail && isCorrectPassword) {
      authContext.setToken('1234');
      navigate('/transaction');
    }
  }

  return (
    <div className={`${theme}-theme m-3`}>
      <h2>Log in to your account</h2>
      <form onSubmit={login}>
        <div className="d-flex flex-column align-items-start mb-2">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="d-flex flex-column align-items-start mb-4">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="bg-success text-white mt-4 border broder-1 rounded p-4 w-25">
        <h5 className="mb-3">Credentials</h5>
        <p className="mb-2">Email: guest@email.com</p>
        <p className="m-0">Password: password</p>
      </div>
    </div>
  );
}