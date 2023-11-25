
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import SignIn from './pages/Forms/SignIn';
import SignUp from './pages/Forms/SignUp';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App font-poppins pb-11 overflow-hidden">
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
