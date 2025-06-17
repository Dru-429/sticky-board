"use client";

import React from "react";
import { motion } from "framer-motion";
import { StickyNote, Github } from "lucide-react";

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

const features = [
  {
    emoji: "🔒",
    title: "Anonymous Sharing",
    description:
      "Post your thoughts without revealing your identity. Complete privacy guaranteed.",
  },
  {
    emoji: "⏰",
    title: "Auto-Expire",
    description:
      "Notes automatically disappear after 30 days, keeping the board fresh and relevant.",
  },
  {
    emoji: "🎨",
    title: "Creative Freedom",
    description:
      "Express yourself freely with text, emojis, and creative formatting options.",
  },
  {
    emoji: "🌐",
    title: "Open Community",
    description:
      "Join a global community of thinkers, dreamers, and creative minds.",
  },
];

export default function LandingPage() {
  return (
    <div className="font-sans w-screen overflow-x-hidden">
      {/* Navbar Component */}
      <nav className="w-full  px-[25%] bg-[#faf0ca7b] border-b border-[#F4D35E] py-4 flex items-center justify-between shadow-sm fixed top-0 z-50">
        {/* Left section: StickyNote icon and 'Sticky Board' text */}
        <div className="flex items-center space-x-3">
          <StickyNote className="w-6 h-6 text-[#0D3B66]" />{" "}
          {/* StickyNote icon */}
          <span className="text-3xl font-bold text-[#0D3B66]">
            Sticky Board
          </span>{" "}
        </div>

        {/* Right section: Navigation links and GitHub */}
        <motion.div
          className="flex items-center space-x-10 font-medium text-xl" // space-x-10 creates space between items
          initial={{ opacity: 0, y: -10 }} // Initial animation state (invisible, slightly above)
          animate={{ opacity: 1, y: 0 }} // Animate to visible, normal position
          transition={{ duration: 0.5 }} // Animation duration
        >
          {/* Features link */}
          <a
            href="#features"
            className="text-[#0D3B66] font-medium hover:underline"
          >
            Features
          </a>
          {/* About (How it works) link */}
          <a
            href="#how-it-works"
            className="text-[#0D3B66] font-medium hover:underline"
          >
            About
          </a>
          {/* GitHub icon and link */}
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5 text-[#0D3B66]" /> {/* Github icon */}
            <a
              href="https://github.com/Dru-429/sticky-board"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="text-[#0D3B66] font-medium hover:underline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#FAF0CA] min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.h1
          className="pb-5 text-4xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r to-[#EE964B] from-[#022f5c] mb-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <StickyNote className="md:w-[110px] md:h-[115px] text-[#0D3B66]" />
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
          href="/notes"
          className="mt-8 text-lg font-bold inline-block hover:bg-[#EE964B] bg-[#F95738] text-white px-6 py-3 rounded-lg transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Start Posting
        </motion.a>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 md:px-20">
        <div className="container mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-6">
              Why Choose <span className="text-[#F4D35E]">Sticky Board?</span>
            </h2>
            <p className="text-2xl font-medium text-[#0D3B66]/80 max-w-2xl mx-auto">
              Experience the freedom of anonymous sharing with our simple yet
              powerful platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-[#FAF0CA]/60 hover:bg-[#FAF0CA] transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F4D35E] rounded-full flex items-center justify-center text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#0D3B66]/80 font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>{" "}
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#F4D35E] md:py-24 ">
        <div className="container mx-auto px-6 text-center">
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
                <p className="text-[#0D3B66]/80 text-lg font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.a
            href="/notes"
            className="mt-8 inline-block bg-[#0D3B66] hover:bg-[#010202] text-white font-bold text-lg px-6 py-3 rounded-lg transition "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Start Posting
          </motion.a>
        </div>{" "}
      </section>

      {/* Thanks Section */}
      <section className="bg-[#0D3B66] text-center py-16 pt-20 pb-">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-[#FAF0CA]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Made with vibes ✨ & caffeine 🍵 for the idea junkies
          <p className="text-[#f95738]">
            Built with 💡, 🔥 and a keyboard smash by Dru
          </p>
        </motion.h3>

        <p className="text-xl text-[#]/70 mb-8">
          <strong className="text-[#F4D35E]">Sticky Board</strong> by Dru
        </p>
        <div className="bg-[#FAF0CA] rounded-2xl p-8 border-2 border-[#F4D35E] max-w-3xl mx-auto mt-8">
          <p className="text-xl font-medium text-[#0D3B66]/70">
            "A place where thoughts flow freely, ideas find their voice, and
            creativity knows no bounds. Thank you for being part of this
            journey."
          </p>
        </div>
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
            href="https://linkedin.com/in/dhruvsahoo"
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
