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
        fafsa: formData.fafsa === "yes",
        disability: formData.disability === "yes",
        first_gen: formData.firstGen === "yes",
        race: formData.race,
        cuny_service: formData.cunyCareServices,
        free_response: formData.support_needs
    };
    console.log(JSON.stringify(payload))
};


  return (
    <div className="flex flex-col min-h-screen">
  <div className="bg-gradient-to-r shadow-lg p-8 w-screen flex items-center justify-center">
    <div className="bg-white surv-block shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
        CUNY Student Needs Survey
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* College */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which college do you attend?
          </label>
          <select
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            <option value="">Choose...</option>
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
            <option value="hostos">Hostos Community College</option>
            <option value="york">York College</option>
          </select>
        </div>
        {/* Major */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What is your major?
        </label>
        <select
          name="major"
          value={formData.major}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you receive aid from FAFSA?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="fafsa"
                value="yes"
                checked={formData.fafsa === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="fafsa"
                value="no"
                checked={formData.fafsa === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>


        {/* First-Generation College Student */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Are you a first-generation college student?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="firstGen"
                value="yes"
                checked={formData.firstGen === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="firstGen"
                value="no"
                checked={formData.firstGen === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        
        {/* Disability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have a disability?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="disability"
                value="yes"
                checked={formData.disability === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="disability"
                value="no"
                checked={formData.disability === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What is your race?
        </label>
        <select
          name="race"
          value={formData.race}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
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
      <label className="block text-sm font-medium text-gray-700 mb-1">
        What kind of CUNY CARE services have you used?
      </label>
      <select
          name="cunyCareServices"
          value={formData.cunyCareServices}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
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

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What kind of support do you feel you need the most?
          </label>
          <textarea
            name="support_needs"
            value={formData.support_needs}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Share your feedback..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
);

}
