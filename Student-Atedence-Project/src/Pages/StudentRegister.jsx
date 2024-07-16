import React, { useState } from 'react';

const StudentRegister = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [faculty, setFaculty] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [careerCounseling, setCareerCounseling] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !mobileNumber || !faculty || !department || !gender || !age || !password) {
      setFormError(true);
      console.log('Please fill out all fields.');
      return;
    }
    const studentData = {
      fullName,
      email,
      mobileNumber,
      faculty,
      department,
      gender,
      age,
      password,
      careerCounseling,
    };
    console.log('Student Data:', studentData);
    onSubmit();
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="flex space-x-4">
              <label>
                <input type="radio" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                <span className="ml-2">Male</span>
              </label>
              <label>
                <input type="radio" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Faculty</label>
            <select value={faculty} onChange={(e) => setFaculty(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select Faculty</option>
              <option value="Faculty 1">Faculty 1</option>
              <option value="Faculty 2">Faculty 2</option>
              <option value="Faculty 3">Faculty 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Department</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full p-2 border border-gray-300 rounded mt-1">
              <option value="">Select Department</option>
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Career Counseling Service</label>
            <div className="flex items-center">
              <input type="checkbox" checked={careerCounseling} onChange={(e) => setCareerCounseling(e.target.checked)} className="form-checkbox" />
              <span className="ml-2">I want to book the career counseling session</span>
            </div>
          </div>
          {formError && <p className="text-red-500 text-sm mb-4">Please fill out all fields.</p>}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
