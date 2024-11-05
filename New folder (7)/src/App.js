import { Route, Routes } from 'react-router-dom';
import './App.css';
import SingUp from './components/Singup/SingUp';
import Dashbord from './components/Dashbord';



function App() {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashbord />} />
        <Route path='/singup' element={<SingUp />} />
      </Routes>
    </>
  );
}

export default App;
