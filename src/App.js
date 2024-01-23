import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from './pages/MainPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
