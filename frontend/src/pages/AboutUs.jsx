import React from 'react';

import { useNavigate } from 'react-router-dom';

import member1Photo from "../assets/Albertpfp.png"; 
import member2Photo from "../assets/Mohammedpfp.png";
import member3Photo from "../assets/Wayelpfp.png";
import member4Photo from "../assets/Miguelpfp.png";
export default function AboutUsPage() {
const navigate = useNavigate();
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Empowering CUNY students through data driven insights</p>
        </div>

        <div className="space-y-16">
          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              With thorough data collection and analysis, we're bridging the gap between CUNY administration and students. 
              Our platform provides a strong voice for 18 CUNY colleges' students to express their needs, experiences, and ideas for improving
              campus life. By gathering and examining student input, we contribute to improving the learning environment for all CUNY students!
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              As CUNY students, we have observed first hand that student feedback often went unheard or obscured by 
              administrative procedures. Important issues like library hours, mental health support, campus facilities, 
              and academic resources were discussed in scattered conversations but never systematically collected or analyzed.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
                We made the decision to create something that could actually change things during our hackathon. 
                We created this platform because we believe that student opinions matter and that data-driven 
                insights can result in significant advancements on all CUNY campuses. We're creating a link 
                between students and decision makers.
            </p>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Meet Our Team</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member1Photo} 
                    alt="Albert"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Albert B.</h3>
                <p className="text-gray-600 text-sm">Team Lead/Full Stack Dev</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member2Photo} 
                    alt="Mohammed"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mohammed A-M.</h3>
                <p className="text-gray-600 text-sm">Fullstack/Backend Dev</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member3Photo} 
                    alt="Wayel"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wayel H.</h3>
                <p className="text-gray-600 text-sm">Frontend/UI Dev</p>
              </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img 
                    src={member4Photo} 
                    alt="Miguel"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Miguel O.</h3>
                <p className="text-gray-600 text-sm">Frontend/Documentation Dev</p>
                </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Why CUNY Students Matter</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Diversity & Scale</h3>
                <p className="text-gray-700 mb-4">
                  CUNY serves over 240,000 students across New York City, representing one of the most diverse student bodies in the nation. 
                  Every voice matters and we would love to hear yours!
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real Impact</h3>
                <p className="text-gray-700">
                  Your responses directly influence policy decisions, resource allocation, and service improvements that affect thousands 
                  of fellow students.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-700">
                  Our analytics dashboard provides real-time insights back to the community, ensuring transparency in how 
                  your data contributes to positive change.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p>[Email address]</p>                 
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Questions or Feedback?</h3>
                <p className="text-gray-700 mb-4">
                  We'd love to hear from you! Whether you have questions about the survey or suggestions for improvement, 
                  don't hesitate to reach out.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Make Your Voice Heard?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join us in shaping the future of our campuses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                onClick={() => navigate('/survey')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    Take the Survey
                </button>
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="border border-blue-300 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                >
                View Results
                </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}