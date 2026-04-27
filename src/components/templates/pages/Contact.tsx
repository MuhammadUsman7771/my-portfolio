import { motion } from "framer-motion";
import { memo, useCallback, useMemo, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { MdClose, MdOutlineMail } from "react-icons/md";
import { useTheme } from "../../../context/ThemeContext";
import { useForm } from "../../../hooks";
import { contactFormSchema } from "../../../Schemas/authSchema";
import { sendContactEmail } from "../../../services/contactService";
import { contactInfo, socialsLinks } from "../../constant";
import { FormState, Statues } from "../../types/type";

const Contact = () => {
  const { theme } = useTheme();
  const [submitStatus, setSubmitStatus] = useState<Statues>("idle");

  const handleFormSubmit = useCallback(async (values: FormState) => {
    try {
      await sendContactEmail(values);
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  }, []);

  // Use custom form hook
  const {
    values: formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm<FormState>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: (values) => contactFormSchema.validate(values),
    onSubmit: handleFormSubmit,
  });

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
      id="contact"
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
            <MdOutlineMail className="w-10 h-10 text-white" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <div
              className={`p-8 rounded-2xl ${theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
                } shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Let's Connect
              </h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl ${theme === "dark"
                        ? "bg-primary-500/20 text-primary-400"
                        : "bg-primary-100 text-primary-600"
                        }`}
                    >
                      {info.icon && <info.icon size={20} />}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={`text-sm hover:text-primary-500 transition-colors ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4
                  className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-3">
                  {socialsLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${theme === "dark"
                        ? "bg-gray-700/50 text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 border border-gray-600/50"
                        : "bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 border border-gray-200"
                        }`}
                      title={social.name}
                    >
                      {social.icon && <social.icon size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div
              className={`p-8 rounded-2xl ${theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
                } shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Send a Message
              </h3>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl mb-6 ${theme === "dark"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-green-100 text-green-700 border border-green-200"
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </span>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl mb-6 ${theme === "dark"
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                >
                  <div className="flex items-center space-x-2">
                    <MdClose className="w-5 h-5" />
                    <span>
                      There was an error sending your message. Please try again
                      later.
                    </span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${theme === "dark"
                      ? errors.name
                        ? "border-red-500 bg-gray-700 text-white"
                        : "border-gray-600 bg-gray-700 text-white focus:border-primary-500"
                      : errors.name
                        ? "border-red-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900 focus:border-primary-500"
                      }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p
                      className={`mt-2 text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${theme === "dark"
                      ? errors.email
                        ? "border-red-500 bg-gray-700 text-white"
                        : "border-gray-600 bg-gray-700 text-white focus:border-primary-500"
                      : errors.email
                        ? "border-red-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900 focus:border-primary-500"
                      }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p
                      className={`mt-2 text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 ${theme === "dark"
                      ? errors.subject
                        ? "border-red-500 bg-gray-700 text-white"
                        : "border-gray-600 bg-gray-700 text-white focus:border-primary-500"
                      : errors.subject
                        ? "border-red-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900 focus:border-primary-500"
                      }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p
                      className={`mt-2 text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none ${theme === "dark"
                      ? errors.message
                        ? "border-red-500 bg-gray-700 text-white"
                        : "border-gray-600 bg-gray-700 text-white focus:border-primary-500"
                      : errors.message
                        ? "border-red-500 bg-white text-gray-900"
                        : "border-gray-300 bg-white text-gray-900 focus:border-primary-500"
                      }`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p
                      className={`mt-2 text-sm ${theme === "dark" ? "text-red-400" : "text-red-600"
                        }`}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${isSubmitting
                    ? theme === "dark"
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : theme === "dark"
                      ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105"
                      : "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <IoIosSend className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
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
              Available for new opportunities
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

export default memo(Contact);
