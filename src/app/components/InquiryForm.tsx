import { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", contactNumber: "", message: "" });
  };

  return (
    <div className="w-full lg:w-2/3 p-8 bg-white shadow-md rounded-md text-primary">
      {submitted && (
        <p className="text-green-500 text-center mb-4">
          Thank you! Your inquiry has been submitted.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-12 text-lg px-2 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-12 text-lg px-2 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-lg font-bold">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full h-12 text-lg px-2 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full text-lg p-2 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-purple-500 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
