import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { memo, useCallback } from "react";
import { useTheme } from "../../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      }
    >
      <AnimatedIcon isDark={theme === "dark"} />
    </motion.button>
  );
};

const AnimatedIcon = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="relative w-5 h-5">
      <motion.div
        initial={false}
        animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} />
      </motion.div>
    </div>
  );
};

export default memo(ThemeToggle);
