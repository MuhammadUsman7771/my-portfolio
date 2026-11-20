"use client";
import { useState, type FormEvent } from "react";
import {
  isContactConfigured,
  sendContactEmail,
} from "@/services/contactService";
export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      subject: String(data.get("subject") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
    if (!values.name || !values.subject || !values.message) {
      setState("error");
      setMessage("Please fill in your name, subject, and message.");
      return;
    }
    if (!isContactConfigured) {
      window.location.href = `mailto:musmandev370@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`)}`;
      setMessage(
        "Your email app should open with your draft. Send it there to finish, or email musmandev370@gmail.com directly.",
      );
      setState("idle");
      return;
    }
    setState("sending");
    setMessage("");
    try {
      await sendContactEmail(values);
      setState("success");
      setMessage("Thanks! Your message has been sent.");
      form.reset();
    } catch {
      setState("error");
      setMessage(
        "Your message was not sent. Please try again or email me directly.",
      );
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <h3>Tell me what you have in mind.</h3>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            placeholder="Alex Morgan"
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            placeholder="alex@company.com"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        Subject
        <input
          name="subject"
          placeholder="A new website, an idea, a collaboration…"
          required
          maxLength={200}
        />
      </label>
      <label>
        Your message
        <textarea
          name="message"
          placeholder="A little about your project…"
          rows={4}
          required
          minLength={10}
          maxLength={5000}
        />
      </label>
      <div className="form-footer">
        <button
          className="button button-primary"
          disabled={state === "sending"}
          type="submit"
        >
          {state === "sending"
            ? "Sending…"
            : isContactConfigured
              ? "Send message"
              : "Open email draft"}
        </button>
        <span>
          {isContactConfigured
            ? "Straight to my inbox."
            : "Compose here. Send in your email app."}
        </span>
      </div>
      <p
        className={`form-status ${state}`}
        role={state === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
