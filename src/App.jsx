import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { OrgSignup } from './pages/OrgSignup.jsx';
import { OrgDashboard } from './pages/Organization/Dashboard.jsx';
import { Upload } from './pages/Organization/Upload.jsx';
import { Allproducts } from './pages/Allproducts.jsx';
import { SingleProduct } from './pages/SingleProduct.jsx';
import { Logout } from './pages/Logout.jsx';
import { UserHome } from './pages/Organization/UserHome.jsx';
import { SuccessPage } from './pages/SuccessPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orgsignup" element={<OrgSignup />} />
        <Route path="/orgdashboard" element={<OrgDashboard />} />
        <Route path="/dashboard" element={<UserHome/>} />
        <Route path="/uploadProduct" element={<Upload />} />
        <Route path="/allProduct" element={<Allproducts />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
