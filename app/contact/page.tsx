"use client";

import { useState } from "react";
import Link from "next/link";
import { EmailOutlined } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="space-y-8 flex flex-col min-h-screen md:w-[50%] w-[90%] py-30">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Happy to connect!</h1>
          <p className="text-zinc-600">
            Whether you're a recruiter, fellow developer, or just want to chat
            about tech, food, or tennis, I'd love to hear from you!
          </p>
          <div className="flex space-x-4">
            <Link
              className="flex space-x-1.5"
              href={"mailto:carlahau110@gmail.com"}
            >
              <EmailOutlined></EmailOutlined>
              <p className="underline underline-offset-5">
                carlahau110@gmail.com
              </p>
            </Link>
            <Link
              className="flex space-x-1.5"
              href={"mailto:carlahau110@gmail.com"}
            >
              <RoomIcon></RoomIcon>
              <p>Los Angeles, CA</p>
            </Link>
          </div>
        </div>

        <div>
          {isSubmitted && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                ✓ Message sent! Thanks for reaching out!
              </p>
            </div>
          )}

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="03d6c2e3-0383-48a8-bc02-bc9f865ff74f"
            />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                className="w-full border-2 border-zinc-200 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                className="w-full border-2 border-zinc-200 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
                placeholder="your.email@example.com"
                type="email"
                name="email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border-2 border-zinc-200 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition min-h-[150px] resize-y"
                placeholder="What would you like to talk about?"
                name="message"
                required
              />
            </div>

            <button
              className="bg-black text-white py-3 rounded-lg hover:bg-zinc-800 transition disabled:bg-zinc-400 disabled:cursor-not-allowed hover:cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
