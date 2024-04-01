import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/img/icon/Mushroom_logo.ico";
function Navbar() {
   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         const accessToken = sessionStorage.getItem("access_token");
         const response = await fetch("http://127.0.0.1:5000/logout", {
            method: "POST",
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         });

         if (response.ok) {
            sessionStorage.removeItem("access_token");
            navigate("/");
         } else {
            const responseBody = await response.json();
            console.error("Logout failed:", responseBody);
         }
      } catch (error) {
         console.error("Error during logout:", error);
      }
   };
   useEffect(() => {
      // Navbar Fixed
      const handleScroll = () => {
         const header = document.querySelector("header");
         const fixedNav = header.offsetTop;
         if (window.scrollY > fixedNav) {
            header.classList.add("navbar-fixed");
         } else {
            header.classList.remove("navbar-fixed");
         }
      };

      // Tambahkan event listener saat komponen dimuat
      window.addEventListener("scroll", handleScroll);

      // Membersihkan event listener saat komponen dilepas
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []); // Penambahan dependensi kosong untuk memastikan efek hanya dijalankan sekali saat komponen dimuat

   useEffect(() => {
      // Hamburger
      const handleHamburgerClick = () => {
         const hamburger = document.querySelector("#hamburger");
         const navMenu = document.querySelector("#nav-menu");

         hamburger.classList.toggle("hamburger-active");
         navMenu.classList.toggle("hidden");
      };

      // Tambahkan event listener saat komponen dimuat
      const hamburger = document.querySelector("#hamburger");
      hamburger.addEventListener("click", handleHamburgerClick);

      // Membersihkan event listener saat komponen dilepas
      return () => {
         hamburger.removeEventListener("click", handleHamburgerClick);
      };
   }, []); // Penambahan dependensi kosong untuk memastikan efek hanya dijalankan sekali saat komponen dimuat

   return (
      <header className="bg-sail absolute top-0 left-0 w-full flex items-center z-10 transition duration-75 ease-in-out">
         <div className="container lg:hidden">
            <div className="flex justify-between items-center relative">
               <div className="px-4">
                  <button
                     id="hamburger"
                     name="hamburger"
                     type="button"
                     className="block absolute left-0"
                  >
                     <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                     <span className="hamburger-line transition duration-300 ease-in-out"></span>
                     <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                  </button>
                  <nav
                     id="nav-menu"
                     className="hidden absolute -mr-36 py-5 bg-white shadow-lg rounded-t-none rounded-bl-lg rounded-br-lg max-w-xl w-full right-36 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                  >
                     <ul className="block lg:flex lg:mr-[300px]">
                        <li className="group">
                           <Link
                              to="/dashboard"
                              className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >
                              Home
                           </Link>
                        </li>
                        <li className="group">
                           <Link
                              to="/dashboard"
                              className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >
                              Mushroom
                           </Link>
                        </li>
                        {/* <li className="group">
                  <Link
                    to="history"
                    className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                  >
                    History
                  </Link>
                </li> */}
                        <li className="group">
                           <Link
                              href="/about"
                              className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >
                              About
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="px-4">
                  <Link
                     to="/dashboard"
                     className="font-bold text-lg text-primary block py-6"
                  >
                     <img
                        src="/src/assets/img/icon/Mushroom_logo.png"
                        alt="Logo"
                        height="35"
                        width="50"
                        className="max-w-full w-10 mx-auto"
                     />
                  </Link>
               </div>
               <div className="px-4">
                  <ul>
                     <li className="group flex items-center">
                        <button
                           onClick={handleLogout}
                           className="text-base font-bold text-saildark group-hover:text-primary flex items-center"
                        >
                           <img
                              src="src/assets/svg/logout-svgrepo-com.svg"
                              alt="Logout"
                              height="3"
                              width="15"
                              className="mr-3"
                           />
                           <span>Logout</span>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="container hidden lg:flex justify-between items-center relative">
            <div className="px-4">
               <Link
                  to="/dashboard"
                  className="font-bold text-lg text-primary block py-6"
               >
                  <img
                     src="/src/assets/img/icon/Mushroom_logo.png"
                     alt="Logout"
                     height="35"
                     width="43"
                     className="mr-3"
                  />
               </Link>
            </div>
            <div className="px-1">
               <nav
                  id="nav-menu"
                  className="hidden absolute py-1 bg-white shadow-lg rounded-t-none rounded-bl-lg rounded-br-lg max-w-xl w-full right-36 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
               >
                  <ul className="block lg:flex lg:mr-[300px]">
                     <li className="group">
                        <Link
                           to="/dashboard"
                           className="text-base center font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="group">
                        <Link
                           to="/jamur"
                           className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                        >
                           Mushroom
                        </Link>
                     </li>
                     {/* <li className="group">
                        <Link
                           to={"/history"}
                           className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                        >
                           History
                        </Link>
                     </li> */}
                     <li className="group">
                        <Link
                           to="/about"
                           className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                        >
                           About
                        </Link>
                     </li>
                     {/* <li className="group">
                <Link
                  to="/detect"
                  className="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                >
                  Detect Mushroom
                </Link>
              </li> */}
                  </ul>
               </nav>
            </div>
            <div className="px-4">
               <ul>
                  <li className="group flex items-center">
                     <button
                        onClick={handleLogout}
                        className="text-base font-bold text-saildark group-hover:text-primary flex items-center"
                     >
                        <img
                           src="src/assets/svg/logout-svgrepo-com.svg"
                           alt="Logout"
                           height="3"
                           width="15"
                           className="mr-3"
                        />
                        <span>Logout</span>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default Navbar;
