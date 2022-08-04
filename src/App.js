import LandingPage from "./LandingPage";
import { ResumePage } from "./components";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="cv" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
