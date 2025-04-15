import React from 'react'
import { Instagram, Linkedin, Github, Facebook, MapPin, PhoneCall, Mail } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>Sikandrabad, Bulandshahr (203205), UP, India</span>
          </div>
          <div className="flex flex-col gap-y-2 text-sm">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-4 h-4 text-gray-400" />
              <span>+91 6396297405</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:saifianas771@gmail.com" className="underline hover:text-white">
                saifianas771@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Anassaifi10" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer