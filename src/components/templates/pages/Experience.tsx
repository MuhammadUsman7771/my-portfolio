import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { experienceData } from "../../constant";

const Experience = () => {
  const { theme } = useTheme();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
        },
      },
    }),
    [],
  );

  const itemVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    [],
  );

  return (
    <section
      id="experience"
      className={`py-16 transition-colors duration-300 ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            A journey through my professional experience, showcasing the
            projects and technologies I've worked with.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div
            className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 ${theme === "dark"
              ? "bg-gradient-to-b from-primary-500/50 via-secondary-500/50 to-primary-500/50"
              : "bg-gradient-to-b from-primary-300/50 via-secondary-300/50 to-primary-300/50"
              }`}
          />

          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-8 sm:mb-12 pl-12 sm:pl-20"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-2 sm:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 ${theme === "dark"
                  ? "bg-gray-800 border-primary-500 shadow-lg shadow-primary-500/25"
                  : "bg-white border-primary-500 shadow-lg shadow-primary-500/25"
                  }`}
              />

              {/* Experience Card */}
              <div
                className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/30"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300/50"
                  }`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl ${theme === "dark"
                        ? "bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30"
                        : "bg-gradient-to-br from-primary-100 to-secondary-100 border border-primary-200"
                        }`}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${theme === "dark"
                            ? "text-primary-400"
                            : "text-primary-600"
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <span
                          className={`font-medium text-sm sm:text-base ${theme === "dark"
                            ? "text-primary-400"
                            : "text-primary-600"
                            }`}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`text-left sm:text-right ${theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                  >
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4 sm:mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={`flex items-start space-x-2 sm:space-x-3 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                      >
                        <div
                          className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${theme === "dark"
                            ? "bg-primary-400"
                            : "bg-primary-500"
                            }`}
                        />
                        <span className="text-xs sm:text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4
                    className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${theme === "dark"
                          ? "bg-gray-700/50 text-primary-300 border border-gray-600/50 hover:bg-primary-500/20 hover:border-primary-500/50"
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-primary-100 hover:border-primary-300"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
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
              Always expanding my expertise
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

export default memo(Experience);
