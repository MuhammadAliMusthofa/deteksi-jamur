import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    // Navbar Fixed
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    hamburger.addEventListener('click', handleHamburgerClick);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
    };
  }, []); // Penambahan dependensi kosong untuk memastikan efek hanya dijalankan sekali saat komponen dimuat

  return (
    <header
         class="bg-sail absolute top-0 left-0 w-full flex items-center z-10 transition duration-75 ease-in-out"
      >
        
         <div class="container lg:hidden">
            <div class="flex justify-between items-center relative">
               <div class="px-4">
                  <button
                     id="hamburger"
                     name="hamburger"
                     type="button"
                     class="block absolute left-0"
                  >
                     <span
                        class="hamburger-line transition duration-300 ease-in-out origin-top-left"
                     ></span>
                     <span
                        class="hamburger-line transition duration-300 ease-in-out"
                     ></span>
                     <span
                        class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                     ></span>
                  </button>
                  <nav
                     id="nav-menu"
                     class="hidden absolute py-5 bg-white shadow-lg rounded-t-none rounded-bl-lg rounded-br-lg max-w-xl w-full right-36 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                  >
                     <ul class="block lg:flex lg:mr-[300px]">
                        <li class="group">
                           <a
                              href="index.html"
                              class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                              >Home</a
                           >
                        </li>
                        <li class="group">
                           <a
                              href="mushroom.html"
                              class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                              >Mushroom</a
                           >
                        </li>
                        <li class="group">
                           <a
                              href="#portofolio"
                              class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                              >History</a
                           >
                        </li>
                        <li class="group">
                           <a
                              href="about.html"
                              class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                              >About</a
                           >
                        </li>
                     </ul>
                  </nav>
               </div>
               <div class="px-4">
                  <a
                     href="index.html"
                     class="font-bold text-lg text-primary block py-6"
                  >
                     <img
                        src="/src/assets/img/icon/Mushroom_logo.png"
                        alt="Logo"
                        height="35"
                        width="43"
                        class="max-w-full mx-auto"
                     />
                  </a>
               </div>
               <div class="px-4">
                  <ul>
                     <li class="group flex items-center">
                        <a
                           href="login.html"
                           class="text-base font-bold text-saildark group-hover:text-primary flex items-center"
                        >
                           <img
                              src="src/assets/svg/logout-svgrepo-com.svg"
                              alt="Logout"
                              height="3"
                              width="15"
                              class="mr-3"
                           />
                           <span>Logout</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

        
         <div
            class="container hidden lg:flex justify-between items-center relative"
         >
            <div class="px-4">
               <a
                  href="#home"
                  class="font-bold text-lg text-primary block py-6"
               >
                  <img
                     src="/src/assets/img/icon/Mushroom_logo.png"
                     alt="Logo"
                     height="35"
                     width="43"
                     class="max-w-full mx-auto mr-4"
                  />
               </a>
            </div>
            <div class="px-4">
               <nav
                  id="nav-menu"
                  class="hidden absolute py-5 bg-white shadow-lg rounded-t-none rounded-bl-lg rounded-br-lg max-w-xl w-full right-36 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
               >
                  <ul class="block lg:flex lg:mr-[300px]">
                     <li class="group">
                        <a
                           href="#home"
                           class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >Home</a
                        >
                     </li>
                     <li class="group">
                        <a
                           href="mushroom.html"
                           class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >Mushroom</a
                        >
                     </li>
                     <li class="group">
                        <a
                           href="#portofolio"
                           class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >History</a
                        >
                     </li>
                     <li class="group">
                        <a
                           href="about.html"
                           class="text-base font-bold text-saildark py-2 mx-8 group-hover:text-primary flex"
                           >About</a
                        >
                     </li>
                  </ul>
               </nav>
            </div>
            <div class="px-4">
               <ul>
                  <li class="group flex items-center">
                     <a
                        href="login.html"
                        class="text-base font-bold text-saildark group-hover:text-primary flex items-center"
                     >
                        <img
                           src="src/assets/svg/logout-svgrepo-com.svg"
                           alt="Logout"
                           height="3"
                           width="15"
                           class="mr-3"
                        />
                        <span>Logout</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
  );
}

export default Navbar;
