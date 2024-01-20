import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Main from './components/pages/Main';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
