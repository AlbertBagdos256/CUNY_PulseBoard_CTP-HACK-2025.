import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashBoardPage3() {
  // Filters state
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("30days");
  const [selectedRace, setSelectedRace] = useState("All");

  // Dropdown list of colleges
  const colleges = [
    "All Colleges",
    "Baruch College",
    "Bronx Community College",
    "Brooklyn College",
    "The City College of New York",
    "College of Staten Island",
    "Hostos Community College",
    "Hunter College",
    "John Jay College of Criminal Justice",
    "Kingsborough Community College",
    "LaGuardia Community College",
    "Lehman College",
    "Medgar Evers College",
    "New York City College of Technology",
    "Borough of Manhattan Community College",
    "Queens College",
    "Queensborough Community College",
    "York College",
  ];

  // Pie colors
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ca6b5c",
    "#8dd1e1",
    "#d0ed57",
    "#a4de6c",
    "#ff8042",
  ];

  // Data from API
  const [cuny_service_race, setCunyServiceRace] = useState([]);


  // Race filter → determines which bars show up
  const displayedRaceKeys =
    selectedRace === "All"
      ? ["asian", "black", "white", "hispanic"]
      : [selectedRace.toLowerCase()];

  // Fetch analytics data from backend
  const fetchData = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/analytics", {
        method: "POST",
      });
      const data = await res.json();
      console.log("Analytics data:", data);
      setCunyServiceRace(data.results.cuny_service_race || []);
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        {/*Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CUNY Colleges Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time insights from CUNY student responses
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
          <div className="flex flex-wrap gap-6 items-center">
            {/* Filters label */}
            <span className="text-sm font-medium text-gray-700">Filters:</span>

            {/* College dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">
                College:
              </label>
              <select
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
                className="border block4 border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {colleges.map((college, index) => (
                  <option
                    key={index}
                    value={college.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {college}
                  </option>
                ))}
              </select>
            </div>

            {/* Race filter dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Race:</label>
              <select
                value={selectedRace}
                onChange={(e) => setSelectedRace(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="All">All</option>
                <option value="Asian">Asian</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Hispanic">Hispanic</option>
              </select>
            </div>
          </div>
        </div>

        {/* Race Services + Race Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 w-full">
          {/* Bar Chart - Span 2 Columns */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">
              CUNY Services per Race
            </h2>
            <div className="flex-2 min-h-[300px]">
              
            </div>
          </div>

          {/* Pie Chart - Span 1 Column */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              Race Distribution (Total Surveys)
            </h2>
            <div className="flex-1 min-h-[300px] flex justify-center items-center">
 
            </div>
          </div>
        </div>

        {/* Race Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
          {/* Race vs FAFSA Chart */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">FAFSA Usage by Race</h2>
            <div className="flex-1">
       
            </div>
          </div>

          {/* Race vs First-Gen Chart */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              First-Gen Status by Race
            </h2>
            <div className="flex-1">
       
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Graph Section */}
          

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link to="/dashboard">
                <button className="w-full but bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                  General Overview
                </button>
              </Link>
              <Link to="/dashboard2">
                <button className="w-full but border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                  Race Analytics
                </button>
              </Link>
              <Link to="/dashboard3">
                <button className="w-full but border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                  Colleges Analytics
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
