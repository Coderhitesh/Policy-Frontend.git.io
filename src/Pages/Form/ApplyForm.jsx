import React, { useState } from 'react';

function ApplyForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    insuranceType: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
                  Type of Insurance
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="Heath Gain Policy">Heath Gain Policy</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Personal Accident">Personal Accident</option>
                  <option value="Overseas Travel Insurance">Overseas Travel Insurance</option>
                  <option value="Schengen Travel Insurance">Schengen Travel Insurance</option>
                  <option value="Student Travel Insurance">Student Travel Insurance</option>
                  <option value="Asia Travel Insurance">Asia Travel Insurance</option>
                  <option value="Senior Citizen Travel Insurance">Senior Citizen Travel Insurance</option>
                  <option value="Annual Multi Trip Insurance">Annual Multi Trip Insurance</option>
                  <option value="Car Insurance">Car Insurance</option>
                  <option value="Two Wheeler Insurance">Two Wheeler Insurance</option>
                  <option value="Comprehensive Car Insurance">Comprehensive Car Insurance</option>
                  <option value="Commercial Vehicle Insurance">Commercial Vehicle Insurance</option>
                  <option value="Fire Insurance">Fire Insurance</option>
                  <option value="Engineering Insurance">Engineering Insurance</option>
                  <option value="Marine Insurance">Marine Insurance</option>
                  <option value="Liability Insurance">Liability Insurance</option>
                  <option value="Package Insurance">Package Insurance</option>
                  <option value="Burglary and Housebreaking">Burglary and Housebreaking</option>
                  <option value="Group Mediclaim Insurance">Group Mediclaim Insurance</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="4"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ApplyForm;
