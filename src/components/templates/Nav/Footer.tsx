import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { memo } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { useScrollToTop } from "../../../hooks/useScroll";
import { contactInfo, navItems, socialsLinks } from "../../constant";
import { ROUTES } from "../../routes/route";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const scrollToTop = useScrollToTop();

  return (
    <footer
      className={`transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.a
              href={ROUTES.HOME}
              className={`text-3xl font-bold inline-block mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MU
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                .
              </span>
            </motion.a>
            <p
              className={`text-base leading-relaxed mb-8 max-w-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Building beautiful digital experiences with a focus on clean
              design and intuitive user interfaces. Let's work together to bring
              your ideas to life.
            </p>
            <div className="flex space-x-4">
              {socialsLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                    theme === "dark"
                      ? "bg-gray-800/50 text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 border border-gray-700/50"
                      : "bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon && <social.icon size={20} />}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((link) => (
                <li key={link.id} className="flex">
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-200 hover:text-primary-500 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className={`text-lg font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.id} className="flex flex-col">
                  <span
                    className={`text-xs font-medium mb-1 ${
                      theme === "dark" ? "text-primary-400" : "text-primary-600"
                    }`}
                  >
                    {info.label}
                  </span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className={`text-sm transition-colors duration-200 hover:text-primary-500 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {info.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
            theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
          }`}
        >
          <p
            className={`text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            © {currentYear} Muhammad Usman Software Developer. All rights
            reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`mt-4 md:mt-0 p-3 rounded-xl transition-all duration-200 ${
              theme === "dark"
                ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600"
                : "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600"
            } shadow-lg`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
