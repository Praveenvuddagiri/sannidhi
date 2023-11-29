"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactPhone: "",
    city: "",
    postCode: "",
    email: "",
    tellUsAbout: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);
    // Add your form submission logic here, e.g., send data to backend

    // Reset form fields after submission
    setFormData({
      contactName: "",
      contactPhone: "",
      city: "",
      postCode: "",
      email: "",
      tellUsAbout: "",
    });
  };

  return (
    <div className="max-w-lg">
      <div className="mb-4">
      <h1 className="text-lg mb-1">Need Help ? </h1>
      <h1 className='text-3xl font-semibold'>Get in Touch</h1>
      </div>
    
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <div className="mb-1 col-span-2">
          <label
            htmlFor="contactName"
            className="block text-sm font-medium"
          >
            Contact Name
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
        </div>

       

        <div className="mb-2">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="postCode" className="block text-sm font-medium">
            Post Code
          </label>
          <input
            type="text"
            name="postCode"
            value={formData.postCode}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
        </div>
        <div className="mb-2 col-span-2">
          <label
            htmlFor="contactPhone"
            className="block text-sm font-medium"
          >
            Contact Phone
          </label>
          <input
            type="text"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
        </div>

        <div className="mb-2 col-span-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
        </div>

        <div className="mb-2 col-span-2">
          <label
            htmlFor="tellUsAbout"
            className="block text-sm font-medium"
          >
            Tell us about
          </label>
          <textarea
            name="tellUsAbout"
            value={formData.tellUsAbout}
            onChange={handleInputChange}
            className="block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            rows="2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-[#B82A26] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-[14px] w-full sm:w-auto px-5 py-1 text-center"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
