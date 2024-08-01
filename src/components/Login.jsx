import React from "react";
import axios from "axios";

import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email, password);
    console.log(regexEmail.test(email));

    // Validations
    if (regexEmail.test(email) !== " " && password.length >= 3) {
      alert("<h2>Logged In</h2>");
    } else {
     alert("<h2>Invalid Email or Password</h2>");
      return;
    }

    if (email === "" || password === "") {
      alert("<h2>Fields cannot be empty</h2>");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      alert("<h2>User or Password incorrect</h2>");
    } else {
      alert("<h2>Welcome to Movispedia!</h2>");
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        alert("Ingresaste correctamente");
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido);
        handleClick();
      });
  };

//   const API_KEY = 'tu_clave_api_aquí'; // Reemplaza esto con tu clave API real
// const BASE_URL = 'https://api.themoviedb.org/3';

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   params: {
//     api_key: API_KEY,
//   },
// });

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/all" />}

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            MoviesPedia
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            action="#"
            onSubmit={HandleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium text-zinc-400">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="email"
                  required
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="currentColor"
                  >
                    <path
                      strokewidth-linecap="round"
                      strokewidth-linejoin="round"
                      strokewidth-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="currentColor"
                  >
                    <path
                      strokewidth-linecap="round"
                      strokewidth-linejoin="round"
                      strokewidth-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokewidth-linecap="round"
                      strokewidth-linejoin="round"
                      strokewidth-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <a className="underline" href="#">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
