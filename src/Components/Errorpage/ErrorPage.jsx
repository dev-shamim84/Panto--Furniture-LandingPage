import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-md w-full text-center"
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4 sm:mb-6">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 px-2 sm:px-0">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
        >
          <AiOutlineArrowLeft size={18} /> Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
