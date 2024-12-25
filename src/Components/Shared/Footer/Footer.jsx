import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Books Corner</h2>
            <p className="text-white">
              Your gateway to endless adventures, heartfelt stories, and boundless knowledge. Explore our collection and let the magic of books inspire your next journey!
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent_1 transition-colors">Home</Link></li>
              <li><Link to="/books" className="hover:text-accent_1 transition-colors">Books</Link></li>
              <li><Link to="/about" className="hover:text-accent_1 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent_1 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent_1 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent_1 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent_1 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent_1 transition-colors">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-secondary">
          <p>&copy; 2023 Books Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
