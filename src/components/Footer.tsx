import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} BBQ Restaurant. All rights
            reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
