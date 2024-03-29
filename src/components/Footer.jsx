import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sail">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm font-bold text-saildark">
            © Mushroom Scanner 2024 ® - Your Mushroom Scanner
          </p>
          <div className="flex-shrink-0">
            <img
              src="src/assets/img/icon/Mushroom_logo.png"
              className="w-9 h-9"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
