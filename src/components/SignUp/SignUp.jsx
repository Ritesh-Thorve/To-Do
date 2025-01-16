import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
   
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLogin(true);
    navigate('/todo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        {/* Tab Toggle */}
        <div className="flex justify-between mb-6 border-b-2">
          <button
            className={`w-1/2 py-2 font-bold ${isLogin ? 'text-blue-500 border-blue-500 border-b-2' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-bold ${!isLogin ? 'text-blue-500 border-blue-500 border-b-2' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          // Login Form
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button" // Added type="button" to prevent form submission
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
              onClick={handleLogin} // Navigate to '/todo' when logging in
            >
              Login
            </button>
          </form>
        ) : (
          // Signup Form
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button" // Added type="button" to prevent form submission
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-all"
              onClick={() => alert('Signup successful!')} // Placeholder for signup logic
            >
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
