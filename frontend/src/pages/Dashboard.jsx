import React, { useState } from 'react';

export default function DashBoardPage() {
  const [selectedCollege, setSelectedCollege] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');

  const colleges = [
    'All Colleges',
    'Baruch College',
    'Bronx Community College', 
    'Brooklyn College',
    'The City College of New York',
    'College of Staten Island',
    'Hostos Community College',
    'Hunter College',
    'John Jay College of Criminal Justice',
    'Kingsborough Community College',
    'LaGuardia Community College',
    'Lehman College',
    'Medgar Evers College',
    'New York City College of Technology',
    'Borough of Manhattan Community College',
    'Queens College',
    'Queensborough Community College',
    'York College'
  ];

  const surveyData = [
    { category: 'Academic Support', satisfaction: 78, responses: 1247 },
    { category: 'Campus Facilities', satisfaction: 82, responses: 1156 },
    { category: 'Student Services', satisfaction: 71, responses: 1089 },
    { category: 'Technology Resources', satisfaction: 85, responses: 987 },
    { category: 'Career Services', satisfaction: 69, responses: 876 }
  ];

  const recentInsights = [
    { title: 'Library Hours Extension Request', trend: '+15%', color: 'text-green-600' },
    { title: 'Mental Health Support Demand', trend: '+23%', color: 'text-orange-600' },
    { title: 'Online Learning Satisfaction', trend: '+8%', color: 'text-blue-600' },
    { title: 'Campus Safety Concerns', trend: '-12%', color: 'text-red-600' }
  ];

  const topColleges = [
    { name: 'Hunter College', responses: 487, satisfaction: 84 },
    { name: 'Brooklyn College', responses: 423, satisfaction: 81 },
    { name: 'Queens College', responses: 398, satisfaction: 79 },
    { name: 'Baruch College', responses: 356, satisfaction: 77 }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Survey Analytics Dashboard</h1>
          <p className="text-gray-600">Real time insights from CUNY student responses</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>
            <select 
              value={selectedCollege} 
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {colleges.map((college, index) => (
                <option key={index} value={college.toLowerCase().replace(' ', '-')}>
                  {college}
                </option>
              ))}
            </select>
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="1year">Last year</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <div className="text-green-600 text-sm font-medium">+12%</div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2,847</div>
            <div className="text-gray-600 text-sm">Total Responses</div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="text-blue-600 text-sm font-medium">18/18</div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
            <div className="text-gray-600 text-sm">CUNY Colleges</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Satisfaction by Category */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Satisfaction by Category</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>
            </div>
            <div className="space-y-4">
              {surveyData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{item.responses} responses</span>
                      <span className="text-sm font-semibold text-gray-900">{item.satisfaction}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${item.satisfaction}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Colleges */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Top Performing Colleges</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div className="space-y-4">
              {topColleges.map((college, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{college.name}</div>
                    <div className="text-sm text-gray-600">{college.responses} responses</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-600">{college.satisfaction}%</div>
                    <div className="text-xs text-gray-500">satisfaction</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Insights & Trends */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Insights & Trends</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {recentInsights.map((insight, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-gray-900">{insight.title}</h3>
                    <span className={`text-sm font-semibold ${insight.color}`}>{insight.trend}</span>
                  </div>
                  <p className="text-xs text-gray-600">Based on responses from the last 30 days</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                Create New Survey
              </button>
              <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                Schedule Report
              </button>
              <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                View All Responses
              </button>
              <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm">
                Export Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}