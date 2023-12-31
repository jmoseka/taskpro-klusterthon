
import './App.css';
import Home from './components/Home/Home';
import SignIn from './pages/Forms/SignIn';
import SignUp from './pages/Forms/SignUp';
import {Route, Routes} from 'react-router-dom';
import Landing from './pages/Landingpage/Landing';
import Invoice from './components/Invoices/Invoice';



function App() {
  return (
    <div className=" App font-poppins overflow-hidden">
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Landing />}/>
        <Route path="/dashboard" element={<Home />}/>
        <Route path="/invoices" element={<Invoice />}/>

      </Routes>
    </div>
  );
}

export default App;
