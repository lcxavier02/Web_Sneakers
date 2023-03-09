import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [body, setBody] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .put("http://localhost:4000/register", body)
      .then(({ data }) => {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        navigate("/");
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  return (
    <div className="w-full max-w-xs mx-auto my-12">
      <h1 className="text-xl mb-3">Register into our page!</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="example username"
            onChange={inputChange}
            value={body.username}
            name="username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@something.com"
            onChange={inputChange}
            value={body.email}
            name="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            onChange={inputChange}
            value={body.password}
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
