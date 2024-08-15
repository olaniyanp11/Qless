import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { OrgSignup } from './pages/OrgSignup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orgsignup" element={<OrgSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
