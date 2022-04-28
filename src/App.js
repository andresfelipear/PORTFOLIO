import { Routes, Route } from "react-router-dom";
import Foot from "./components/footer/Foot";
import Header from "./components/header/Header";
import AboutPage from "./pages/aboutPage/AboutPage";
import HomePage from "./pages/homePage/HomePage";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
        <Foot/>
    </div>
  );
}

export default App;
