import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Notfound from './pages/Notfound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import User from './pages/User';
import './index.css';

function App() {  
  return (    
    <BrowserRouter>      
      <Layout>        
        <Navbar />        
        <div className='h-[90%] overflow-x-hidden bg-base-current overflow-y-auto'>
          <Routes>
            <Route path="/" element={<Home />} />          
            <Route path="*" element={<Notfound />} />                      
            <Route path="signin" element={<Signin />} />          
            <Route path="signup" element={<Signup />} />                      
            <Route path="user" element={<User />} />                            
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
