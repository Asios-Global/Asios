import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import banner from "../assets/contactus.jpg";
import { motion } from "framer-motion";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone:""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/inquiry/sendEmail`,
        formData
      );
      if (response.data.success) {
        setSuccess("Inquiry submitted successfully!");
        setFormData({ name: "", email: "", message: "", phone:"" });
      }
    } catch (err) {
      setError("Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/inquiry/addInquiry`,
        formData
      );
      setSuccess("Inquiry submitted successfully!");
      setFormData({ name: "", email: "", message: "",phone:"" });
    } catch (err) {
      setError("Failed to submit inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative h-[600px]">
        <img
          src={banner}
          className="h-full w-full object-cover"
          alt="Contact Banner"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-serif font-bold text-center">
            Contact us
          </h1>
        </motion.div>
      </div>

      <div className="container md:my-32 my-20">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-1/2 p-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <div className="flex flex-col gap-3">
              <Link to="tel:9998299800">Phone: +91 9998299800</Link>
              <Link to="mailto:info@asios.in">Email: info@asios.in</Link>
              <p>
                Address: Latest Ceramic Zone, 1st Floor, B/H Ishan Ceramic Zone
                8-A, National Highway, Morbi, Gujarat 363642
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.youtube.com/@asiosglobal?si=u7CNidRQInNnPMWS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl text-red-600 hover:text-red-400" />
                </a>
                <a
                  href="https://www.facebook.com/asiosglobal?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-blue-600 hover:text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com/company/asios-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-500" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="phone"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <button
                type="submit"
                className="p-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
