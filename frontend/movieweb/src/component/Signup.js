import { Link } from "react-router-dom";
import image1 from "../images/IMG-20240810-WA0037.jpg";
import { useState } from "react";

function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center gap-10 ">
        <div className="h-auto w-1/3 mt-36">
          <img
            src={image1}
            alt="Registration Visual"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-96 w-1/3 mb-14">
          <form action="http://localhost:5000/create" method="post">
            <h2 className="text-4xl  text-orange-600">
              Movietic signup
            </h2>
            <div className="mt-5">
              <label className="text-lg">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                className="block h-14 w-4/5 mt-2 p-2 bg-gray-800 text-white rounded outline-none"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label className="text-lg mt-4 block">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="block h-14 w-4/5 mt-2 p-2 bg-gray-800 text-white rounded outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label className="text-lg mt-4 block">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="block h-14 w-4/5 mt-2 p-2 bg-gray-800 text-white rounded outline-none"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label className="text-lg mt-4 block">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="block h-14 w-4/5 mt-2 p-2 bg-gray-800 text-white rounded outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="flex mt-3 gap-2">
                <h2 className="text-2xl">Already Signup ?</h2>
                <Link to="Login" className="text-2xl underline">
                  Login
                </Link>
              </div>

              <input
                type="submit"
                className="mt-6 w-1/3 py-2 h-14 bg-orange-500 text-white rounded cursor-pointer"
                name="Signup"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
