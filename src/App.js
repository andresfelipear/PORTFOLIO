import { Routes, Route } from "react-router-dom";
import Foot from "./components/footer/Foot";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <Foot/>
    </div>
  );
}

export default App;
