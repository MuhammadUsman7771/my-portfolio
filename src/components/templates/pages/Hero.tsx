import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { memo, useCallback, useMemo } from "react";
import TypewriterEffect from "typewriter-effect";
import { IMAGES } from "../../../../public/index";
import { useSmoothScroll } from "../../../hooks/useScroll";
import { dynamicTexts } from "../../constant";
import { ScrollToElement } from "../../types/type";
import Button from "../Button/Button";

const Hero = () => {
  const scrollToElement = useSmoothScroll();

  const handleScrollTo = useCallback(
    (target: ScrollToElement) => {
      scrollToElement(target);
    },
    [scrollToElement],
  );

  const typewriterOptions = useMemo(
    () => ({
      strings: dynamicTexts,
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      cursor: "|",
    }),
    [],
  );

  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-600 dark:text-primary-400 text-xl md:text-2xl font-medium mb-4"
          >
            Hello, I'm Muhammad Usman
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            I'm a{" "}
            <span className="text-primary-600 dark:text-primary-400">
              <TypewriterEffect options={typewriterOptions} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
          >
            Building beautiful, functional digital experiences with a focus on
            clean design and intuitive user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => handleScrollTo("#projects")}
              icon={<ChevronRight size={18} />}
              iconPosition="right"
              size="lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => handleScrollTo("#contact")}
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
            <img
              src={IMAGES.HERO_IMAGE}
              alt="Usman"
              className="rounded-full object-cover w-full h-full border-8 border-white dark:border-gray-800 shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => handleScrollTo("#about")}
      >
        <ArrowDown className="text-gray-500 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default memo(Hero);
