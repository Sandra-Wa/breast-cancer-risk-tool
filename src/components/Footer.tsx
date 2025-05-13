
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-afya-700 font-bold text-xl">AfyaRisk</span>
              <span className="text-afya-500 text-xs font-medium ml-1">Aware</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Empowering East African women with personalized breast cancer risk assessments
              and prevention strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-afya-600 text-sm">Home</Link></li>
              <li><Link to="/assessment" className="text-gray-500 hover:text-afya-600 text-sm">Take Assessment</Link></li>
              <li><Link to="/resources" className="text-gray-500 hover:text-afya-600 text-sm">Resources</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-afya-600 text-sm">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-sm text-gray-500">
              Email: contact@afyariskawareness.org<br />
              Phone: +254 700 000 000
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Subscribe to our newsletter for updates
              </p>
              <div className="mt-2 flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-3 py-2 text-sm rounded-md border border-gray-300 flex-grow"
                />
                <button className="bg-afya-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AfyaRisk Aware. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-afya-600">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-afya-600">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-afya-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
