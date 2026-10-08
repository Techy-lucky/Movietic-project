  import React, { useState } from "react";
  import image2 from "../images/IMG-20240810-WA0033.jpg";
  import { Link } from "react-router-dom";

  function Login() {
    const [form1Data, setForm1Data] = useState({
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      setForm1Data({
        ...form1Data,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div className="h-screen w-full">
        <div className="flex justify-center items-center gap-16 h-full">
          <div className="mb-10 h-[450px] w-1/3">
            <img
              src={image2}
              alt="Login Illustration"
              className="h-full w-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="h-[500px] w-1/3 mt-10">
            <form action="http://localhost:5000/login" method="post">
              <h2 className="text-4xl text-orange-600 mb-8">Movietic Login</h2>
              <div className="space-y-5">
                <div>
                  <label className="text-lg">Email </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="h-14 w-4/5 mt-2 bg-gray-800 text-white outline-none border-none rounded-md p-2 text-lg"
                    value={form1Data.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-lg">Password </label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="h-14 w-4/5 mt-2 bg-gray-800 text-white outline-none border-none rounded-md p-2 text-lg"
                    value={form1Data.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex mt-3 gap-2">
                  <h2 className="text-2xl">Don't have an account ?</h2>
                  <Link to="/" className="text-2xl underline">
                    Signup
                  </Link>
                </div>

                <input
                  type="submit"
                  value="Login Now"
                  className="h-14 w-1/3 mt-5 bg-orange-500 text-white rounded-md cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default Login;
