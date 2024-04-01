import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Mengimpor useHistory dari react-router-dom
import "../login-form/LoginForm.css"; // Ganti dengan nama file CSS yang sesuai

function RegistrationForm() {
   const navigate = useNavigate(); // Mendapatkan objek history dari useHistory

   const [delay, setDelay] = useState(false);
   const [registration, setRegistration] = useState({
      username: "",
      password: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      setDelay(true);

      try {
         // Mengirim data registrasi ke API
         const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(registration),
         });

         if (response.ok) {
            // Navigasi ke halaman login setelah registrasi berhasil
            navigate("/login");
         } else {
            // Handle error response from API
            console.error("Registration failed:", response.statusText);
         }
      } catch (error) {
         console.error("Error registering user:", error);
      } finally {
         setDelay(false);
      }
   };

   const handleChange = (e) => {
      setRegistration({ ...registration, [e.target.name]: e.target.value });
   };

   return (
      <div className="wrapper-one">
         <div className="wrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
               <h1>Register</h1>
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
                  {delay ? "Waiting..." : "Register"}
               </button>
               <hr className="border-gray-300 my-4" />
               <p className="text-center">
                  Already Have an Account?{" "}
                  <a
                     href="/login"
                     className="text-sail font-semibold focus:outline-none transition duration-300 transform hover:scale-105  shadow-lg"
                  >
                     Login
                  </a>
               </p>
            </form>
         </div>
      </div>
   );
}

export default RegistrationForm;
