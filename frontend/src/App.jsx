import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SurveyPage from "./pages/SurveyPage.jsx";
import DashBoardPage from "./pages/Dashboard.jsx";
import DashBoardPage2 from "./pages/DashBoard2.jsx";
import DashBoardPage3 from "./pages/DashBoard3.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard2" element={<DashBoardPage2 />} />
        <Route path="/dashboard3" element={<DashBoardPage3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;