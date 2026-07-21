import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I'm open to internships, freelance work, and full-time
            software development opportunities.
          </p>

          <div className="space-y-5 mt-10 text-lg">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              gravikishore50@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              +91 8247570228
            </p>

            <a
              href="https://github.com/ravikishore03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ravi-kishore-652088350/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-cyan-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-[#1f2937] mb-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-[#1f2937] mb-4 outline-none"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-[#1f2937] mb-6 outline-none"
          />

          <button
            className="w-full py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}