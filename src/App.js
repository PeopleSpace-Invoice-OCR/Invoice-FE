import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from './pages/MainPage';
import SignUp from './components/SignUpPage/SignUp';

function App() {
  return (
    <Router>
      {/* <Header /> */}
        {/* <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes> */}
        {/* <Footer /> */}
      <SignUp />
    </Router>
  );
}

export default App;
