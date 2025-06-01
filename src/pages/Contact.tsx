import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    role: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox" && "checked" in e.target) {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      topic: "",
      role: "",
      message: "",
      termsAccepted: false,
    });
    // Add backend integration here
  };

  return (
  
    <div className="bg-black text-white px-6 py-[150px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Get In Touch With <br /> WrapMyRide.ai</h2>
          <p className="text-gray-400">
            Have questions about our AI visualizer, business solutions, pricing, or need support? We're here to help.
          </p>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-2">
              <span><CiMail /></span> <span>hello@wrapmyride.ai</span>
            </div>
            <div className="flex items-center gap-2">
              <span><IoCallOutline /></span> <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-2">
              <span><IoLocationOutline /></span> <span>123 Sample St, Sydney NSW 2000 AU</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-black border border-gray-600 p-2 text-white md:col-span-1 col-span-2"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-black border border-gray-600 p-2 text-white md:col-span-1 col-span-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black border border-gray-600 p-2 text-white md:col-span-1 col-span-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-black border border-gray-600 p-2 text-white md:col-span-1 col-span-2"
          />
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="bg-black border border-gray-600 p-2 text-white col-span-2"
            required
          >
            <option value="">Choose a topic</option>
            <option value="support">Support</option>
            <option value="pricing">Pricing</option>
            <option value="demo">Request a Demo</option>
            <option value="other">Other</option>
          </select>

          {/* Role selection */}
          <div className="col-span-2 space-y-2 text-sm">
            <p>Which best describes you?</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Car Owner", "Dealer", "Shop Owner", "Other"].map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={formData.role === role}
                    onChange={handleChange}
                    className="accent-yellow-400"
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="col-span-2 bg-black border border-gray-600 p-2 text-white"
            required
          />

          {/* Terms */}
          <div className="col-span-2 flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="accent-yellow-400"
              required
            />
            <label>I accept the <a href="#" className="underline">Terms</a></label>
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-2 px-6 rounded hover:bg-yellow-500 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Contact;
