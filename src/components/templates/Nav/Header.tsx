import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { useScrollPosition, useSmoothScroll } from "../../../hooks/useScroll";
import { navItems } from "../../constant";
import ThemeToggle from "../Button/ThemeToggle";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = useScrollPosition(10);
  const scrollToElement = useSmoothScroll();

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMobileMenuOpen(false);
      scrollToElement(href);
    },
    [scrollToElement],
  );
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            aria-label="Muhammad Usman — Home"
            className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("#home");
            }}
          >
            <Logo />
          </motion.a>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                href={item.href}
                onClick={handleNavClick}
              />
            ))}
            <ThemeToggle />
          </nav>
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-left"
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = memo<{
  label: string;
  href: string;
  onClick: (href: string) => void;
}>(({ label, href, onClick }) => (
  <motion.button
    onClick={() => onClick(href)}
    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    {label}
  </motion.button>
));

NavItem.displayName = "NavItem";

export default memo(Header);
