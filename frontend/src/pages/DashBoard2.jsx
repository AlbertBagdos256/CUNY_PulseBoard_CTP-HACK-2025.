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

export default function DashBoardPage2() {
  // Filters state
  const [selectedCollege, setSelectedCollege] = useState("all");
  const [selectedRace, setSelectedRace] = useState("All");

  // Dropdown list of colleges
   const colleges = ["All Colleges","Baruch College","Bronx Community College","Brooklyn College","The City College of New York",
                    "College of Staten Island","Hostos Community College","Hunter College","John Jay College of Criminal Justice",
                    "Kingsborough Community College","LaGuardia Community College","Lehman College",
                    "Medgar Evers College","New York City College of Technology","Borough of Manhattan Community College",
                    "Queens College","Queensborough Community College","York College"];

  // Pie colors
  const COLORS = ["#8884d8","#82ca9d","#ffc658","#ca6b5c","#8dd1e1","#d0ed57","#a4de6c","#ff8042",];

  // Data from API
  const [cuny_service_race, setCunyServiceRace] = useState([]);
  const [surveys_per_race, setSurveysRace] = useState([]);
  const [race_vs_fafsa, setRaceFafsa] = useState([]);
  const [first_gen_race, setFirstGenRace] = useState([]);
  const [top_college_per_race, setTopCollegeRace] = useState([]);

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
      setSurveysRace(data.results.surveys_per_race || []);
      setRaceFafsa(data.results.race_vs_fafsa || []);
      setFirstGenRace(data.results.first_gen_race || []);
      setTopCollegeRace(data.results.first_gen_race || []);
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
            Race Analytics Dashboard
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
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cuny_service_race}
                  margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="cuny_service" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  {displayedRaceKeys.includes("asian") && (
                    <Bar dataKey="asian" name="Asian" fill="#8884d8" />
                  )}
                  {displayedRaceKeys.includes("black") && (
                    <Bar dataKey="black" name="Black" fill="#82ca9d" />
                  )}
                  {displayedRaceKeys.includes("white") && (
                    <Bar dataKey="white" name="White" fill="#ffc658" />
                  )}
                  {displayedRaceKeys.includes("hispanic") && (
                    <Bar dataKey="hispanic" name="Hispanic" fill="#ca6b5c" />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart - Span 1 Column */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              Race Distribution (Total Surveys)
            </h2>
            <div className="flex-1 min-h-[300px] flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={surveys_per_race}
                    dataKey="total_surveys"
                    nameKey="race"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {surveys_per_race.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Race Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
          {/* Race vs FAFSA Chart */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">FAFSA Usage by Race</h2>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={race_vs_fafsa}
                  margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="race" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="using_fafsa"
                    barSize={50}
                    name="Using FAFSA"
                    fill="#726dcdff"
                  />
                  <Bar
                    dataKey="no_using_fafsa"
                    barSize={50}
                    name="Not Using FAFSA"
                    fill="#cfa150ff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Race vs First-Gen Chart */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              First-Gen Status by Race
            </h2>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={first_gen_race}
                  margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="race" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="first_gen"
                    barSize={50}
                    name="First-Gen"
                    fill="#55cba3ff"
                  />
                  <Bar
                    dataKey="non_first_gen"
                    barSize={50}
                    name="Non First-Gen"
                    fill="#d45e5eff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
                <Link to = "/dashboard">
              <button className="w-full but bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                General Overview
              </button>
              </Link>
              <Link to = "/dashboard2">
              <button className="w-full but border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                Race Analytics
              </button>
              </Link>
              <Link to = "/dashboard3">
              <button className="w-full but border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                Colleges Analytics
              </button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
