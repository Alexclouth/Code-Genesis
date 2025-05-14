import { useDarkMode } from "../context/DarkModeContext";
import LightLogo from "../assets/img3.png";
import DarkLogo from "../assets/img2.png";

export default function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={darkMode ? DarkLogo : LightLogo}
        alt="Logo" className="w-20 h-14 rounded-full" />
        <h1 className="text-2xl font-extrabold mb-1">ode</h1>
        <span className="text-2xl font-bold">Genesis</span>
      </div>

      {/* Dark Mode Toggle */}
      <div className="text-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-semibold shadow hover:scale-105 transition"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Sign In Button */}
      <button className="flex items-center px-4 py-2 mx-4 rounded-3xl text-lg text-yellow-500 font-bold border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white transition">
        Sign In
      </button>
    </nav>
  );
}
