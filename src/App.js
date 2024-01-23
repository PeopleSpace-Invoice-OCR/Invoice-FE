import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';
import SignUp from './components/SignUpPage/SignUp';
import Login from './components/SignUpPage/Login';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={ 
            <>
              <Header/>
              <MainPage/>
              <Footer />
            </>
          } />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        <Route path='/upload' element={<UploadPage />} />
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
