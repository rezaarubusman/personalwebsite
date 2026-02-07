import { Link } from "react-router";

const Navigationbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-white"
          >
            Website Profile
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-white hover:text-gray-400 transition-colors"
            >
              Home
            </Link>

            <a
              href="#skills"
              className="text-sm font-medium text-white hover:text-gray-400 transition-colors"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
