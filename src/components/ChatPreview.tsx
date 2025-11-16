"use client";

import { motion } from "framer-motion";

const userMessages = [
  "Remind me to send the proposal tomorrow at 10 am.",
  "Also block 30 minutes for deep work in the afternoon.",
];

const botMessages = [
  "Done. I’ll remind you tomorrow at 10:00 AM.",
  "Deep work block added between 3:00–3:30 PM.",
  "I also grouped these under your ‘Client – Nova Labs’ workspace.",
];

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: -10,
    transition: {
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut" as const,

    },
  },
};

export default function ChatPreview() {
  return (
    <div className="relative w-full max-w-sm">
      {/* Outer glow rings */}
      <div className="pointer-events-none absolute -left-10 top-5 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-6 bottom-0 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />

      {/* Main glass card */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-white/10 via-purple-900/40 to-slate-950/80 p-4 shadow-[0_0_45px_rgba(168,85,247,0.7)] backdrop-blur-xl"
      >
        {/* Top bar */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-sky-300 shadow-md shadow-purple-500/50" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-50">
                FlowMind Assistant
              </span>
              <span className="text-[10px] text-emerald-300">
                Syncing tasks · Live
              </span>
            </div>
          </div>
          <div className="flex gap-1 text-[8px] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Chat body */}
        <div className="relative h-[260px] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-black/80 p-3">
          {/* Subtle grid background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#6d28d9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#22d3ee_0,_transparent_55%)]" />
          </div>

          <div className="relative flex h-full flex-col gap-2">
            {/* User messages */}
            {userMessages.map((text, index) => (
              <motion.div
                key={`user-${index}`}
                initial={{ opacity: 0, y: 12, x: 12 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.1 + index * 0.15, duration: 0.4 }}
                className="ml-10 flex justify-end"
              >
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-br from-purple-500 via-fuchsia-500 to-sky-400 px-3 py-2 text-[11px] text-slate-50 shadow-md shadow-purple-500/40">
                  {text}
                </div>
              </motion.div>
            ))}

            {/* Bot messages */}
            {botMessages.map((text, index) => (
              <motion.div
                key={`bot-${index}`}
                initial={{ opacity: 0, y: 12, x: -12 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  delay: 0.45 + index * 0.18,
                  duration: 0.4,
                }}
                className="mr-10 flex justify-start"
              >
                <div className="max-w-[82%] rounded-2xl rounded-bl-sm bg-slate-900/90 px-3 py-2 text-[11px] text-slate-100 shadow-md shadow-black/50 ring-1 ring-white/5">
                  {text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="mt-auto flex justify-start"
            >
              <div className="flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1.5 text-[10px] text-slate-300 ring-1 ring-purple-500/40">
                <span className="inline-flex">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </span>
                <span>Planning the rest of your day…</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom input */}
        <div className="mt-3 flex items-center gap-2 rounded-2xl bg-black/50 px-3 py-2 text-[11px] text-slate-300 ring-1 ring-white/10">
          <span className="truncate">
            “Turn this chat into a schedule I can follow tomorrow.”
          </span>
          <button className="ml-auto rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-3 py-1 text-[10px] font-semibold text-white shadow-md shadow-purple-500/50">
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
