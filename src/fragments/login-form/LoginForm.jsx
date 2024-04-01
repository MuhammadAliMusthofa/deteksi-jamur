import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Mengimpor useHistory dari react-router-dom
import "../login-form/LoginForm.css"; // Ganti dengan nama file CSS yang sesuai

function LoginForm() {
   const navigate = useNavigate(); // Mendapatkan objek history dari useHistory

   const [delay, setDelay] = useState(false);
   const [login, setLogin] = useState({
      username: "",
      password: "",
   });
   const handleSubmit = async (e) => {
      e.preventDefault();
      setDelay(true);

      try {
         // Mengirim data login ke API
         const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
         });

         if (response.ok) {
            // Mendapatkan access_token dari respons API
            const { access_token } = await response.json();
            // Menyimpan access_token dalam sesi
            sessionStorage.setItem("access_token", access_token);
            // Navigasi ke halaman dashboard setelah login berhasil
            navigate("/dashboard");
         } else {
            // Handle error response from API
            console.error("Login failed:", response.message);
         }
      } catch (error) {
         console.error("Error logging in user:", error);
      } finally {
         setDelay(false);
      }
   };

   const handleChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
   };

   // Fungsi untuk memeriksa apakah pengguna sudah login
   const isLoggedIn = () => {
      return sessionStorage.getItem("access_token") !== null;
   };

   // Memeriksa status login sebelum render komponen
   if (isLoggedIn()) {
      return <p>You are already logged in!</p>;
   }

   return (
      <div className="wrapper-one">
         <div className="wrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
               <h1>Login</h1>
               <div className="input-box">
                  <input
                     type="text"
                     placeholder="Username"
                     name="username"
                     onChange={handleChange}
                     required
                  />
               </div>
               <div className="input-box">
                  <input
                     type="password"
                     placeholder="Password"
                     name="password"
                     onChange={handleChange}
                     required
                  />
               </div>

               <button
                  type="submit"
                  className="block mx-auto px-6 py-3 w-full rounded-full bg-sailsem text-white font-semibold focus:outline-none transition duration-300 transform hover:scale-105 hover:bg-sailmed shadow-lg"
                  disabled={delay}
               >
                  {delay ? "Waiting..." : "Login"}
               </button>
               <hr className="border-gray-300 my-4" />
               <p className="text-center">
                  Dont Have an Account?{" "}
                  <a
                     href="/"
                     className="text-sail font-semibold focus:outline-none transition duration-300 transform hover:scale-105  shadow-lg"
                  >
                     Register
                  </a>
               </p>
            </form>
         </div>
      </div>
   );
}

export default LoginForm;
