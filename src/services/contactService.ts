import { FormState } from "../components/types/type";
export const sendContactEmail = async (formData: FormState): Promise<void> => {
  try {
    const emailjs = await import("@emailjs/browser");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Muhammad Usman",
    };

    const response = await emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    );

    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.log("Contact form data:", error);
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }
};
