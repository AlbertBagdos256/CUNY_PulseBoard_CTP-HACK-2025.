import { useState } from "react";

export default function Survey() {
  const [formData, setFormData] = useState({
    major: "",
    fafsa: "",
    disability: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ major: "", fafsa: "", disability: "", comments: "" });
  };

  return (
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-xl p-8 w-screen h-screen flex items-center justify-center">
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Student Survey
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Major */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your major?
          </label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your major"
          />
        </div>

        {/* FAFSA */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you receive aid from FAFSA?
          </label>
          <select
            name="fafsa"
            value={formData.fafsa}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            <option value="">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* First-Generation College Student */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Are you a first-generation college student?
          </label>
          <select
            name="firstGen"
            value={formData.firstGen}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            <option value="">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        {/* Disability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have a disability?
          </label>
          <select
            name="disability"
            value={formData.disability}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            <option value="">Choose...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

       <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        What is your race?
      </label>
      <div className="flex flex-wrap -mx-2">
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="american_indian"
            checked={formData.race === "american_indian"}
            onChange={handleChange}
            className="mr-2"
          />
          American Indian or Alaska Native
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="asian"
            checked={formData.race === "asian"}
            onChange={handleChange}
            className="mr-2"
          />
          Asian
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="black"
            checked={formData.race === "black"}
            onChange={handleChange}
            className="mr-2"
          />
          Black or African American
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="hispanic"
            checked={formData.race === "hispanic"}
            onChange={handleChange}
            className="mr-2"
          />
          Hispanic, Latino, or Spanish Origin
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="middle_eastern"
            checked={formData.race === "middle_eastern"}
            onChange={handleChange}
            className="mr-2"
          />
          Middle Eastern or North African
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="white"
            checked={formData.race === "white"}
            onChange={handleChange}
            className="mr-2"
          />
          White
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="mixed"
            checked={formData.race === "mixed"}
            onChange={handleChange}
            className="mr-2"
          />
          Mixed
        </label>
        <label className="w-1/2 flex items-center px-2 mb-2">
          <input
            type="radio"
            name="race"
            value="other"
            checked={formData.race === "other"}
            onChange={handleChange}
            className="mr-2"
          />
          Other
        </label>
      </div>
    </div>

    /*{/* CUNY Care Services }
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        What kind of CUNY CARE services have you used?
      </label>
      <input
        type="text"
        name="cunyCareServices"
        value={formData.cunyCareServices}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Enter the CUNY CARE services you've used"
      />
    </div> /*

        {/* Comments */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
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
);

}
