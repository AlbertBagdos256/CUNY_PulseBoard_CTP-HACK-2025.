import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SurveyPage from "./pages/SurveyPage.jsx";
import DashBoardPage from "./pages/DashBoard.jsx";


function App() {

  return (
    <div>
      <Routes>
        {/* HomePage route */}
        <Route path="/" element={<HomePage />} />
        {/* SurveyPage route */}
        <Route path="/survey" element={<SurveyPage />} />
        {/* DashBoardPage route */}
        <Route path="/dashboard" element={<DashBoardPage/>} />

      </Routes>
    </div>
  )
}

export default App


