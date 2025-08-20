import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="CUNY PulseBoard Logo"
            className="h-8 w-auto border-2 border-white rounded-lg p-1"
          />
          <span className="text-white font-semibold">CUNY PulseBoard</span>
        </div>

        <p className="text-white text-sm mt-4 sm:mt-0">
          © {new Date().getFullYear()} CUNY PulseBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;