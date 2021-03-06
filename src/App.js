import { Routes, Route } from "react-router-dom";
import Foot from "./components/footer/Foot";
import Header from "./components/header/Header";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import HomePage from "./pages/homePage/HomePage";
import Portfolio from "./pages/portfolio/Portfolio";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Foot/>
    </div>
  );
}

export default App;
