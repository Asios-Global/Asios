import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const ContactUS = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log("formData",formData)
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/inquiry/addInquiry`, formData);
      console.log('Form Submitted:', response.data);
      setSuccess('Inquiry submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-3xl font-semibold mb-4 text-center'>GET IN TOUCH</h2>

      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 p-4'>
          <h2 className='text-xl font-semibold mb-4'>Company Information</h2>
          <div className='flex flex-col gap-3 '>
            <Link to='tel:9998299800' >Phone: +91 9998299800</Link>
            <Link to='mailto:info@asios.in' >Email: info@asios.in</Link>
            <p >Address: Latest Ceramic Zone, 1st Floor, B/H Ishan Ceramic Zone 8-A, National Highway, Morbi, Gujarat 363642</p>
            <div className='flex space-x-4'>
              <a href='https://www.youtube.com/@asiosglobal?si=u7CNidRQInNnPMWS' target='_blank' rel='noopener noreferrer'>
                <FaYoutube className='text-2xl' />
              </a>
              <a href='https://www.facebook.com/asiosglobal?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-2xl' />
              </a>
              <a href='https://www.linkedin.com/company/asios-global/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-2xl' />
              </a>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-6 '>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            ></textarea>
            {error && <p className='text-red-500'>{error}</p>}
            {success && <p style={{color:'green'}}>{success}</p>}
            <button
              type='submit'
              className='p-3 bg-primary text-white rounded-lg font-semibold hover:bg-[#61181e] transition duration-300'
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
