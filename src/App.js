import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from './pages/MainPage';
import SignUp from './components/SignUpPage/SignUp';
import Login from './components/SignUpPage/Login';

function App() {
  return (
    <Router>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
