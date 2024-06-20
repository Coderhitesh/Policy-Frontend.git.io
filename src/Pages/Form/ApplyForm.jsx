import React, { useState } from 'react';
import './form.css';

function ApplyForm() {
  const InsuranceName = sessionStorage.getItem('InsuranceName')
  // console.log(InsuranceName)
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
    <section className="form-section">
      <div className="form-container">
        <div className="heading">
          <h2>Personal Detail</h2>
        </div>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="insuranceType">Type of Insurance</label>
            <select
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              required
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
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit Inquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;