import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import MainSection from "./components/MainSection/MainSection";
import DrIntroduction from "./components/DrIntroduction/DrIntroduction";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/findDoctor" element={<DrIntroduction />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
