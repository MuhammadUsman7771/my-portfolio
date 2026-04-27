import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { GiSkills } from "react-icons/gi";
import { useTheme } from "../../../context/ThemeContext";
import { skillsData } from "../../constant";

const Skills = () => {
  const { theme } = useTheme();
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }),
    [],
  );

  const itemVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    }),
    [],
  );

  return (
    <section
      id="skills"
      className={`py-16 transition-colors duration-300 ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg">
            <GiSkills className="w-8 h-8 text-white" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Core technologies and tools I use to build modern web applications.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`relative p-4 sm:p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/30"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300/50"
                } shadow-lg hover:shadow-2xl`}
            >
              <div className="text-center mb-3 sm:mb-4">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-2 sm:mb-3"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>
                <h3
                  className={`font-bold text-base sm:text-lg ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  {skill.name}
                </h3>
                <span
                  className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="mb-3 sm:mb-4">
                <div
                  className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-200/50"
                    }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${skill.color}80)`,
                        animation: "shimmer 2s infinite",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              <p
                className={`text-xs leading-relaxed text-center ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${theme === "dark"
              ? "bg-gray-800/50 border border-gray-700/50"
              : "bg-white/80 border border-gray-200/50"
              } shadow-lg`}
          >
            <span
              className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
            >
              Always learning and growing
            </span>
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${theme === "dark" ? "bg-primary-400" : "bg-primary-500"
                }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
