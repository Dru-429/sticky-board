"use client";
import { motion } from "framer-motion";
import {
  StickyNote,
  Github,
  Sparkles,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";

const steps = [
  {
    number: "1",
    title: "Write Your Note",
    description: "Type your thoughts, ideas, or message in our simple editor.",
    icon: <StickyNote className="w-6 h-6" />,
  },
  {
    number: "2",
    title: "Post Anonymously",
    description:
      "Share your note with the community without revealing your identity.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    number: "3",
    title: "Watch It Live",
    description:
      "Your note joins the board and automatically expires in 30 days.",
    icon: <Clock className="w-6 h-6" />,
  },
];

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Anonymous Sharing",
    description:
      "Post your thoughts without revealing your identity. Complete privacy guaranteed.",
    color: "from-[#b8e2f2] to-[#cbeac2]",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Auto-Expire",
    description:
      "Notes automatically disappear after 30 days, keeping the board fresh and relevant.",
    color: "from-[#f8c7e8] to-[#fff1b8]",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creative Freedom",
    description:
      "Express yourself freely with text, emojis, and creative formatting options.",
    color: "from-[#cbeac2] to-[#b8e2f2]",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Open Community",
    description:
      "Join a global community of thinkers, dreamers, and creative minds.",
    color: "from-[#fff1b8] to-[#f8c7e8]",
  },
];

export default function LandingPage() {
  return (
    <div className="font-sans bg-[#1a1a1a] text-white">
      {/* Modern Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-xl border-b border-[#cbd5e1]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] rounded-lg">
                <StickyNote className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] bg-clip-text text-transparent">
                Sticky Board
              </span>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href="#features"
                className="text-[#cbd5e1] hover:text-[#b8e2f2] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-[#cbd5e1] hover:text-[#b8e2f2] transition-colors"
              >
                About
              </a>
              <a
                href="https://github.com/Dru-429/sticky-board"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#cbd5e1] hover:text-[#b8e2f2] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </motion.div>

            <div className="md:hidden">
              <a
                href="https://github.com/Dru-429/sticky-board"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1] hover:text-[#b8e2f2] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden mb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] rounded-lg opacity-20"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-[#f8c7e8] to-[#fff1b8] rounded-lg opacity-20"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-[#cbeac2] to-[#b8e2f2] rounded-lg opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <ContainerScroll
            titleComponent={
              <>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] rounded-2xl">
                      <StickyNote className="w-12 h-12 text-[#1a1a1a]" />
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#b8e2f2] via-[#cbeac2] to-[#f8c7e8] bg-clip-text text-transparent">
                      Sticky Board
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold text-[#cbd5e1] mb-6">
                    Drop your thoughts. Share your ideas.
                  </h2>
                  <p className="text-lg md:text-xl text-[#cbd5e1]/80 max-w-2xl mx-auto">
                    A modern platform for anonymous note sharing that
                    auto-expires in 30 days. Express yourself freely in our
                    creative community.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="/notes"
                    className="px-8 py-4 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#b8e2f2]/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Posting
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-4 border border-[#cbd5e1]/20 text-[#cbd5e1] font-semibold rounded-xl hover:bg-[#cbd5e1]/5 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </motion.div>
              </>
            }
          >
            <img
              src={`7.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] bg-clip-text text-transparent">
                Sticky Board?
              </span>
            </h2>
            <p className="text-xl text-[#cbd5e1]/80 max-w-3xl mx-auto">
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
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${
                      feature.color.split(" ")[1]
                    }, ${feature.color.split(" ")[3]})`,
                  }}
                />
                <div className="relative p-8 bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#cbd5e1]/10 rounded-2xl hover:border-[#cbd5e1]/20 transition-all duration-300">
                  <div
                    className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}
                  >
                    <div className="text-[#1a1a1a]">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#cbd5e1]/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/50 mb-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-[#cbd5e1]/80 max-w-3xl mx-auto">
              Getting started is simple and takes just a few seconds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#b8e2f2]/10 to-[#cbeac2]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#cbd5e1]/10 rounded-2xl hover:border-[#cbd5e1]/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-[#1a1a1a]">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                      {step.icon}
                      {step.title}
                    </h3>
                    <p className="text-[#cbd5e1]/80">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/notes"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] text-[#1a1a1a] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#b8e2f2]/25 transition-all duration-300 transform hover:scale-105"
            >
              <StickyNote className="w-5 h-5 mr-2" />
              Start Posting
            </a>
          </motion.div>
        </div>
      </section>

      {/* Thanks Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a]/50 to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Made with vibes ✨ & caffeine 🍵 for the idea junkies
            </h3>
            <p className="text-lg text-[#f8c7e8] font-medium">
              Built with 💡, 🔥 and a keyboard smash by Dru
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-[#1a1a1a]/80 to-[#1a1a1a]/60 backdrop-blur-sm border border-[#cbd5e1]/10 rounded-2xl p-8"
          >
            <p className="text-lg text-[#cbd5e1]/90 italic">
              "A place where thoughts flow freely, ideas find their voice, and
              creativity knows no bounds. Thank you for being part of this
              journey."
            </p>
            <p className="text-sm text-[#cbd5e1]/60 mt-4">
              — Sticky Board by Dru
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#cbd5e1]/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-[#b8e2f2] to-[#cbeac2] rounded-lg">
                <StickyNote className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <span className="font-semibold text-[#cbd5e1]">Sticky Board</span>
            </div>

            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="https://github.com/Dru-429/sticky-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1]/80 hover:text-[#b8e2f2] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/dhruvsahoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cbd5e1]/80 hover:text-[#b8e2f2] transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <p className="text-sm text-[#cbd5e1]/60">
              © 2025 Sticky Board. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
