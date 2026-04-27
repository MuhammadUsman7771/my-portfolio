import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { useTheme } from "../../../context/ThemeContext";
import { projectsData } from "../../constant";

const Projects = () => {
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
      id="projects"
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
            <GrProjects className="w-8 h-8 text-white" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            A showcase of my latest work, featuring modern web applications
            built with cutting-edge technologies.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`relative group`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/30"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-primary-300/50"
                  } shadow-lg hover:shadow-2xl`}
              >
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${theme === "dark"
                          ? "bg-gray-700/50 text-primary-300 border border-gray-600/50"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${theme === "dark"
                        ? "bg-primary-500/20 text-primary-300 border border-primary-500/30 hover:bg-primary-500/30 hover:border-primary-500/50"
                        : "bg-primary-100 text-primary-700 border border-primary-200 hover:bg-primary-200 hover:border-primary-300"
                        }`}
                    >
                      <LuSquareArrowOutUpRight className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href="#"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${theme === "dark"
                        ? "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50"
                        : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 hover:border-gray-300"
                        }`}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Private</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              More projects coming soon
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

export default memo(Projects);
