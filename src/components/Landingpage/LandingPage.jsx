// landingpage.jsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";
export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0D1321] text-[#F0EBD8] overflow-hidden">
      <BackgroundBeams className="z-0" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-32 space-y-8">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-[#F0EBD8]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Drop Notes. Share Ideas. Stay Anonymous.
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg sm:text-xl text-[#748CAB]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Create sticky notes to share your projects, ideas, or social links—no login needed. Notes expire in 30 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button size="lg" className="bg-[#3E5C76] text-white hover:bg-[#1D2D44]">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20 px-6 sm:px-12 md:px-20 bg-[#1D2D44]">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-[#F0EBD8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Use This App?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-10 text-left">
            <motion.div
              className="bg-[#3E5C76] p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium text-[#F0EBD8] mb-2">Anonymous Sharing</h3>
              <p className="text-[#F0EBD8]/70">No sign-in required. Just write and post your thoughts freely.</p>
            </motion.div>
            <motion.div
              className="bg-[#3E5C76] p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium text-[#F0EBD8] mb-2">Auto-Cleanup</h3>
              <p className="text-[#F0EBD8]/70">Notes stay for 30 days and are then auto-deleted—clean and clutter-free.</p>
            </motion.div>
            <motion.div
              className="bg-[#3E5C76] p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-[#F0EBD8] mb-2">Collaboration Ready</h3>
              <p className="text-[#F0EBD8]/70">Share project ideas or links with your team or network easily.</p>
            </motion.div>
            <motion.div
              className="bg-[#3E5C76] p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-[#F0EBD8] mb-2">Infinite Canvas</h3>
              <p className="text-[#F0EBD8]/70">Enjoy endless space to drop your sticky notes in any way you like.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thanks Section */}
      <section className="relative z-10 py-20 text-center bg-[#0D1321]">
        <motion.h3
          className="text-2xl sm:text-3xl font-semibold text-[#F0EBD8]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ✨ Thanks for checking out StickyNotes by Dru
        </motion.h3>
        <p className="text-[#748CAB] mt-4">Hope this brings a little more creativity to your day!</p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-[#1D2D44] text-[#F0EBD8]/80 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Dru-429/sticky-notes" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-[#F0EBD8]" />
          </a>
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-[#F0EBD8]" />
          </a>
        </div>
        <p className="text-sm">© 2025 StickyNotes by Dru. All rights reserved.</p>
      </footer>
    </div>
  );
}
