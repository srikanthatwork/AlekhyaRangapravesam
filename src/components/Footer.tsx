import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Alekhya Alapati</h3>
          <p className="mb-6">Kuchipudi Dancer | Biomedical Engineering Student</p>
          <p className="text-sm opacity-75 mb-4">
            "Dance is the hidden language of the soul." - Martha Graham
          </p>
          <div className="border-t border-amber-700 pt-4 text-sm opacity-75">
            <p>© {new Date().getFullYear()} Alekhya Alapati. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;