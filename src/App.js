import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';
import SignUp from './components/SignUpPage/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
