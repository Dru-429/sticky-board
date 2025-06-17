"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Write Your Note",
    description: "Type your thoughts, ideas, or message in our simple editor.",
  },
  {
    number: "2",
    title: "Post Anonymously",
    description:
      "Share your note with the community without revealing your identity.",
  },
  {
    number: "3",
    title: "Watch It Live",
    description:
      "Your note joins the board and automatically expires in 30 days.",
  },
];


export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#FAF0CA] min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          className="text-4xl md:text-9xl font-bold text-clip tex bg-gradient-to-r from-[#51a4f7] to-[#022f5c] mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sticky Board
        </motion.h1>
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#0D3B66]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Drop your thoughts. Share your ideas.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#0D3B66] mt-4 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sticky Board lets you post anonymous notes that auto-expire in 30
          days.
        </motion.p>

        <motion.a
          href="#features"
          className="mt-8 inline-block bg-[#EE964B] hover:bg-[#F95738] text-white font-medium px-6 py-3 rounded-lg transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Start Posting
        </motion.a>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-12">
            Why Sticky Board?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                emoji: "🔒",
                title: "Anonymous Sharing",
                desc: "No sign-in. Just drop your note and go.",
              },
              {
                emoji: "⏳",
                title: "Auto-Expiry",
                desc: "Your notes vanish in 30 days.",
              },
              {
                emoji: "📌",
                title: "Notice Board Style",
                desc: "See what others are sharing too.",
              },
              {
                emoji: "🌐",
                title: "Shareable",
                desc: "Send your note links anywhere.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#FAF0CA] p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F4D35E] text-2xl mx-auto mb-4">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-semibold text-[#0D3B66]">
                  {item.title}
                </h3>
                <p className="text-[#0D3B66] mt-2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F4D35E] md:py-24 px-6">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-6">
              How It Works
            </h2>
            <p className="text-2xl font-semibold text-[#0D3B66] max-w-2xl mx-auto">
              Getting started is simple and takes just a few seconds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 pb-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center bg-[#FAF0CA] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200  shadow-[#0D3B66]/70"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#0D3B66] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#0D3B66]/80 text-lg font-medium">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>{" "}
      </section>

      {/* Thanks Section */}
      <section className="bg-[#FAF0CA] text-center py-16">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-[#0D3B66]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built with ❤️ for creative minds
        </motion.h3>
        <p className="text-[#0D3B66] mt-2">Sticky Board by Dru</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D3B66] text-white text-center py-6">
        <div className="space-x-6 mb-2">
          <a
            href="https://github.com/Dru-429/sticky-notes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm">© 2025 Sticky Board. All rights reserved.</p>
      </footer>
    </div>
  );
}
