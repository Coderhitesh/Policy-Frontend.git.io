import React, { useState, useEffect } from 'react';
import './form.css';

function Form() {
  const InsuranceName = sessionStorage.getItem('InsuranceName');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    insuranceType: InsuranceName || '',
    additionalInfo: '',
  });

  useEffect(()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
},[])

  useEffect(() => {
  
    setFormData((prevData) => ({
      ...prevData,
      insuranceType: InsuranceName || '',
    }));
  }, [InsuranceName]);

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
    // console.log(formData)

    // Clear sessionStorage
    sessionStorage.removeItem('InsuranceName');

    // Clear form data
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      insuranceType: '',
      additionalInfo: '',
    });
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <div className="heading">
          <h2>Personal Detail</h2>
        </div>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half-width">
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
            <div className="form-group half-width">
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
          </div>
          <div className="form-row">
            <div className="form-group half-width">
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
            <div className="form-group half-width">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
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
            <label htmlFor="insuranceType">Insurance Name</label>
            <input
              type="text"
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              readOnly
            />
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

export default Form;
