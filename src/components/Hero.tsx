"use client";

import { motion } from "framer-motion";
import ChatPreview from "./ChatPreview";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">

      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-purple-600/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-sky-500/40 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-8rem] h-64 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* MAIN CONTAINER – FULL WIDTH */}
      <div className="mx-auto w-full max-w-[1400px] flex flex-col items-center gap-16 px-4 md:px-6 lg:px-8 text-center lg:flex-row lg:text-left lg:justify-between">

        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col gap-6 lg:w-[50%] items-center lg:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          {/* badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 
                       text-[11px] font-medium text-slate-100 shadow-md shadow-purple-500/20"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI copilot that actually lives in your chats
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50 leading-tight">
              Turn everyday conversations
              <br />
              into a{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-sky-300 bg-clip-text text-transparent">
                perfectly planned day.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-lg">
              FlowMind quietly listens to your messages, voice notes and decisions —
              and transforms them into reminders, calendar blocks and action lists
              without you opening another app.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r 
                         from-purple-600 via-fuchsia-500 to-sky-400 px-8 py-3 text-sm font-semibold text-white 
                         shadow-[0_0_35px_rgba(168,85,247,0.6)]"
            >
              Start on WhatsApp
              <span className="text-lg">↗</span>
            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(15,23,42,0.9)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 
                         bg-black/30 px-6 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-sm"
            >
              Watch 60s demo
              <span className="text-base text-slate-400">▶</span>
            </motion.button>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Captures tasks from chat automatically
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              10x faster than manual to-do lists
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE – CHAT COMPONENT */}
        <motion.div
          className="flex justify-center lg:w-[50%]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <ChatPreview />
        </motion.div>

      </div>
    </section>
  );
}
