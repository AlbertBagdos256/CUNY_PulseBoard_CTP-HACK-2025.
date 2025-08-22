import { useState } from "react";

export default function SurveyPage() {
  const [formData, setFormData] = useState({
       college: "",
       major: "",
       fafsa: "",
       disability: "",
       firstGen: "",
       race: "",
       cunyCareServices: "",
       support_needs: ""
    });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    college: formData.college,
    major: formData.major,
    fafsa: formData.fafsa === "yes",        // convert to boolean
    disability: formData.disability === "yes", // convert to boolean
    first_gen: formData.firstGen === "yes", // convert to boolean
    race: formData.race,
    cuny_service: formData.cunyCareServices,
    free_response: formData.support_needs,
    submitted_at: new Date().toISOString() // add timestamp
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/survey/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit survey");
    }

    const data = await response.json();
    console.log("Survey submitted successfully:", data);
    alert("Survey submitted successfully!");
    
    // Optionally reset the form
    setFormData({
      college: "",
      major: "",
      fafsa: "",
      disability: "",
      firstGen: "",
      race: "",
      cunyCareServices: "",
      support_needs: ""
    });

  } catch (error) {
    console.error("Error submitting survey:", error);
    alert("There was an error submitting the survey.");
  }
};


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CUNY Student Needs Survey</h1>
          <p className="text-xl text-gray-600">Help us understand how we can better support CUNY students</p>
        </div>

        {/* Survey Form */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* College */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Which college do you attend?
              </label>
              <select
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Choose your college...</option>
                <option value="baruch">Baruch College</option>
                <option value="bronx">Bronx Community College</option>
                <option value="brooklyn">Brooklyn College</option>
                <option value="city">The City College of New York</option>
                <option value="college_of_staten_island">College of Staten Island</option>
                <option value="hostos">Hostos Community College</option>
                <option value="hunter">Hunter College</option>
                <option value="john_jay">John Jay College of Criminal Justice</option>
                <option value="kingsborough">Kingsborough Community College</option>
                <option value="la_guardia">LaGuardia Community College</option>
                <option value="lehman">Lehman College</option>
                <option value="medgar_evers">Medgar Evers College</option>
                <option value="new_york_city_college_of_technology">New York City College of Technology</option>
                <option value="borough_of_manhattan">Borough of Manhattan Community College</option>
                <option value="queens">Queens College</option>
                <option value="queensborough">Queensborough Community College</option>
                <option value="york">York College</option>
              </select>
            </div>

            {/* Major */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                What is your major?
              </label>
              <select
                name="major"
                value={formData.major}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Choose your major...</option>
                <option value="Business">Business / Business Administration</option>
                <option value="Health Professions">Health Professions (Nursing, etc.)</option>
                <option value="Psychology">Psychology</option>
                <option value="Biology">Biology / Biological Sciences</option>
                <option value="Engineering">Engineering</option>
                <option value="Social Sciences">Social Sciences & History</option>
                <option value="Computer Science">Computer Science / Information Sciences</option>
                <option value="Communications">Communications / Journalism</option>
                <option value="Finance">Finance / Accounting</option>
                <option value="Criminal Justice">Criminal Justice</option>
                <option value="Education">Education</option>
                <option value="Nursing">Nursing</option>
                <option value="Art">Art / Visual & Performing Arts</option>
                <option value="English">English</option>
                <option value="Marketing">Marketing</option>
                <option value="Anthropology Sociology">Anthropology & Sociology</option>
                <option value="History">History</option>
                <option value="Kinesiology">Kinesiology / Physical Therapy</option>
                <option value="Environmental Science">Environmental Science</option>
                <option value="Economics">Economics</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* FAFSA */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Do you receive aid from FAFSA?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="fafsa"
                    value="yes"
                    checked={formData.fafsa === "yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="fafsa"
                    value="no"
                    checked={formData.fafsa === "no"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* First-Generation College Student */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Are you a first-generation college student?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="firstGen"
                    value="yes"
                    checked={formData.firstGen === "yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="firstGen"
                    value="no"
                    checked={formData.firstGen === "no"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Disability */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Do you have a disability?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="disability"
                    value="yes"
                    checked={formData.disability === "yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="disability"
                    value="no"
                    checked={formData.disability === "no"}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
            </div>

            {/* Race */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                What is your race?
              </label>
              <select
                name="race"
                value={formData.race}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Choose...</option>
                <option value="american_indian">American Indian or Alaska Native</option>
                <option value="asian">Asian</option>
                <option value="black">Black or African American</option>
                <option value="hispanic">Hispanic, Latino, or Spanish Origin</option>
                <option value="middle_eastern">Middle Eastern or North African</option>
                <option value="white">White</option>
                <option value="mixed">Mixed</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* CUNY Care Services */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                What kind of CUNY CARE services have you used?
              </label>
              <select
                name="cunyCareServices"
                value={formData.cunyCareServices}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Choose...</option>
                <option value="academic_advising">Academic Advising</option>
                <option value="counseling">Counseling Services</option>
                <option value="financial_aid">Financial Aid Assistance</option>
                <option value="career_services">Career Services</option>
                <option value="tutoring">Tutoring Services</option>
                <option value="disability_services">Disability Services</option>
                <option value="mental_health">Mental Health Services</option>
                <option value="none">None</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Support Needs */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                What kind of support do you feel you need the most?
              </label>
              <textarea
                name="support_needs"
                value={formData.support_needs}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Share your thoughts and feedback..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm cursor-pointer"
              >
                Submit Survey
              </button>
            </div>
          </form>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Thank you for taking the time to share your experiences and help improve CUNY for all students.
          </p>
        </div>
      </div>
    </div>
  );
}