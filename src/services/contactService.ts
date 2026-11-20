export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export const isContactConfigured = Boolean(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
);
export async function sendContactEmail(
  formData: ContactMessage,
): Promise<void> {
  if (!isContactConfigured)
    throw new Error(
      "Email delivery is not configured. Please use the direct email link.",
    );
  const { send } = await import("@emailjs/browser");
  const response = await send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Muhammad Usman",
    },
    { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
  );
  if (response.status !== 200)
    throw new Error(
      "Your message could not be sent. Please try again or email me directly.",
    );
}
