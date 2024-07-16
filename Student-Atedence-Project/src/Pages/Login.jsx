import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('Teacher');

  const handleLogin = () => {
    navigate('/dashboard', { state: { userType } });
  };

  const handleForgotPassword = () => {
    const phoneNumber = '252614388477';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">User Type</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1">
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" onClick={handleForgotPassword} className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
        </div>
        <button onClick={handleLogin} className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200">
          Login
        </button>
        <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Register</a></p>
      </div>
    </div>
  );
};

export default Login;

