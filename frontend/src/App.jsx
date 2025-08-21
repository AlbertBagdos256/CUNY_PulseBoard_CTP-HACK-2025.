import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SurveyPage from "./pages/SurveyPage.jsx";
<<<<<<< HEAD
import DashBoardPage from "./pages/Dashboard.jsx";
import DashBoardPage2 from "./pages/DashBoard2.jsx";
=======
import DashBoardPage from "./pages/DashBoard.jsx";
import AboutUsPage from './pages/AboutUs.jsx';
>>>>>>> wayel-frontend-pages
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
<<<<<<< HEAD
        <Route path="/dashboard2" element={<DashBoardPage2 />} />
=======
        <Route path="/about" element={<AboutUsPage />} />  
>>>>>>> wayel-frontend-pages
      </Routes>
      <Footer />
    </div>
  );
}

export default App;