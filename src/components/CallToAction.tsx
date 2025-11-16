"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      id="pricing"
      className="border-t border-white/5 bg-[#020617] py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        {/* neon border wrapper */}
        <div className="neon-border rounded-[28px] p-[1px]">
          <div className="relative overflow-hidden rounded-[26px] bg-slate-950/95 px-5 py-8 text-center shadow-[0_0_45px_rgba(15,23,42,0.9)] md:px-10 md:py-10">
            {/* floating orbits */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-purple-500/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-sky-400/40 blur-3xl" />
            <div className="pointer-events-none neon-orbit" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              START IN UNDER A MINUTE
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold text-slate-50 md:text-3xl">
              Ready to see what your day
              <br className="hidden sm:block" />
              looks like with a copilot in chat?
            </h2>
            <p className="mt-3 text-sm text-slate-400 md:text-[15px]">
              No new app. No onboarding maze. Just send FlowMind your next
              “remind me…” message and watch it turn into a plan.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-sky-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.7)]"
              >
                Start on WhatsApp
                <span className="text-lg">↗</span>
              </motion.a>
              <p className="text-[11px] text-slate-400">
                Free during beta · No credit card · Works with your existing
                chats
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
