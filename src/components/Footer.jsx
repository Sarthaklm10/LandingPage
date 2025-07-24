import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suvidha Foundation</h3>
            <p className="text-gray-400">
              Office Headquarters:
              <br />
              Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank,
              Khaperkheda, Saoner, Nagpur, Maharashtra - 441102
            </p>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Verify Your Certificate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#causes" className="hover:text-green-400 transition">
                  Our Causes
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-green-400 transition">
                  Our Team
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 border-t border-gray-700 mt-8 py-4">
          <p>
            © {new Date().getFullYear()} Suvidha Foundation (Suvidha Mahila
            Mandal), All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
