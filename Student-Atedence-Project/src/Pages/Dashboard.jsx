// src/components/Dashboard.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { userType } = location.state || { userType: 'Teacher' };
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = (choice) => {
    if (choice === 'yes') {
      navigate('/');
    } else {
      setShowLogoutConfirm(false);
    }
  };

  const username = "John Doe"; // Replace with actual username

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
        <h2 className="text-xl font-bold mb-4">{userType}: {username}</h2>
        <nav className="space-y-2">
          {userType === 'Teacher' && (
            <>
              <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Class A</button>
              <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Class B</button>
              <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Class C</button>
              <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Class D</button>
              <div className="border-t border-gray-700 my-4"></div>
            </>
          )}
          <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Profile</button>
          <button onClick={handleLogout} className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700">Logout</button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {showLogoutConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-bold mb-4">Do you want to log out?</h2>
              <div className="flex justify-end space-x-4">
                <button onClick={() => confirmLogout('no')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">No</button>
                <button onClick={() => confirmLogout('yes')} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Yes</button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Student Attendance Dashboard</h2>
          
          {userType === 'Teacher' ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">Total Students</h3>
                  <p className="mt-2 text-2xl">500</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">Present Today</h3>
                  <p className="mt-2 text-2xl">450</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">Absent Today</h3>
                  <p className="mt-2 text-2xl">50</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                <h3 className="text-2xl font-semibold mb-4">Attendance Records</h3>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b-2 border-gray-200">Student ID</th>
                      <th className="py-2 px-4 border-b-2 border-gray-200">Name</th>
                      <th className="py-2 px-4 border-b-2 border-gray-200">Class</th>
                      <th className="py-2 px-4 border-b-2 border-gray-200">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">1</td>
                      <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
                      <td className="py-2 px-4 border-b border-gray-200">10A</td>
                      <td className="py-2 px-4 border-b border-gray-200">Present</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200">2</td>
                      <td className="py-2 px-4 border-b border-gray-200">Jane Smith</td>
                      <td className="py-2 px-4 border-b border-gray-200">10A</td>
                      <td className="py-2 px-4 border-b border-gray-200">Absent</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">Attendance by Class</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg"> {/* Replace with actual chart */}</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">Monthly Attendance</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg"> {/* Replace with actual chart */}</div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Profile</h3>
              <p>Profile details for the student.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
