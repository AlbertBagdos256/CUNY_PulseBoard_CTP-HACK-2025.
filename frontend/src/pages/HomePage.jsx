import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, Student!</h1>
          <p className="text-gray-600">Explore insights from students across CUNY</p>
        </div>

        <div className="flex space-x-4 mb-12">
          <Link to="/survey" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Take Survey
          </Link>
          <Link to="/analytics" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
            View Results
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/survey" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-plus text-blue-600 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Start New Survey</h3>
            <p className="text-gray-600 text-sm">Share your CUNY experience and help improve student services</p>
          </Link>

          <Link to="/analytics" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-chart-line text-green-600 text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Survey Analytics</h3>
            <p className="text-gray-600 text-sm">View real-time insights and trends from student responses</p>
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
            <div className="text-gray-600 text-sm">Total Responses</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">23</div>
            <div className="text-gray-600 text-sm">CUNY Colleges</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
            <div className="text-gray-600 text-sm">Active Surveys</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
            <div className="text-gray-600 text-sm">Response Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}