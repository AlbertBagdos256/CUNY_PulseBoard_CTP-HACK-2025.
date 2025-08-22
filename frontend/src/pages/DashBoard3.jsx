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
  const [selectedRace, setSelectedRace] = useState("All");

  // Dropdown list of colleges

  const colleges = ["all","baruch","bronx","brooklyn","city","college_of_staten_island","hostos","hunter",
                    "john_jay","kingsborough","la_guardia","lehman","medgar_evers","new_york_city_college_of_technology",
                    "borough_of_manhattan","queens","queensborough","york"];

  const cuny_services = ["academic_advising","counseling","financial_aid","career_services","tutoring","disability_services", "mental_health"]

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
  const [college_count, setCollegeCount] = useState([]);
  const [races_per_college, racesPerCollege] = useState([]);
  const [services_per_college, SetservicesPerCollege] = useState([]);

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
      setCollegeCount(data.results.college_count || []);
      racesPerCollege(data.results.races_per_college || []);
      SetservicesPerCollege(data.results.services_per_college || []);
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtered data based on selected college
  const filteredData =
    selectedCollege === "all"
      ? college_count
      : college_count.filter((c) => c.college === selectedCollege);

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

        {/* College Services + College Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 w-full">
          {/* Bar Chart - Span 2 Columns */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">
              Total Surveys per college
            </h2>
            <div className="flex-2 min-h-[300px]">
              <div className="flex-2 min-h-[300px]">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    layout="vertical"
                    data={filteredData}
                    margin={{ top: 20, right: 20, left: -60, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis
                      dataKey="college"
                      type="category"
                      width={150}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(val) => [`${val}`, "Total Surveys"]} />
                    <Bar
                      dataKey="total_surveys"
                      fill="#547dd4ff"
                      radius={[0, 6, 6, 0]}
                      barSize={10}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">
              Race Distribution (Total Surveys)
            </h2>
            <div className="flex-1 min-h-[300px] flex justify-center items-center">
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
                <button className="w-full  but border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                  Colleges Analytics
                </button>
              </Link>
            </div>
          </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Races per College</h2>
          <div className="flex-2 min-h-[300px]">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={races_per_college.filter(
                  (c) =>
                    selectedCollege === "all" || c.college === selectedCollege
                )}
                margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="college"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                />
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

        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Services per College</h2>
          <div className="flex-2 min-h-[300px]">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={services_per_college.filter(
                  (c) =>
                    selectedCollege === "all" || c.college === selectedCollege
                )}
                margin={{ top: 20, right: 20, left: 0, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="college"
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis />
                <Tooltip />
                <Legend />

                {cuny_services.map((service, idx) => (
                  <Bar
                    key={service}
                    dataKey={service}
                    name={service}
                    fill={COLORS[idx % COLORS.length]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>


      </div>
    </div>
  );
}
