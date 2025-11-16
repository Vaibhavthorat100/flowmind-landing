"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, SaaS startup",
    quote:
      "Our team lives in WhatsApp. FlowMind turned our chaos of promises and follow-ups into a system that quietly reminds us.",
  },
  {
    name: "Sara Iyer",
    role: "Senior Product Manager",
    quote:
      "I don’t open a separate task app anymore. If it’s mentioned in chat, FlowMind remembers it and puts it on my calendar.",
  },
  {
    name: "Neeraj Kulkarni",
    role: "Freelance designer",
    quote:
      "Voice notes used to be a black hole. Now they come back as structured task lists with deadlines. That’s magic for me.",
  },
  {
    name: "Priya Shah",
    role: "Ops lead, remote team",
    quote:
      "The fact that it understands who owns what across multiple chats has saved us from dropping client deliverables.",
  },
];

const looped = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative border-t border-white/5 bg-slate-950/80 py-16 md:py-20"
    >
      {/* subtle bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              SOCIAL PROOF
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              People who talk for a living
              <br className="hidden sm:block" />
              rely on FlowMind.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 md:text-[15px]">
            Founders, product leads and independent creatives use FlowMind to
            keep their commitments in sync with reality.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

          <motion.div
            className="flex w-[200%] gap-5"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          >
            {looped.map((t, index) => (
              <figure
                key={index + t.name}
                className="flex w-[260px] flex-none flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-950 to-black/95 p-5 text-sm text-slate-200 shadow-[0_0_30px_rgba(15,23,42,0.8)]"
              >
                <p className="text-[13px] leading-relaxed text-slate-200">
                  “{t.quote}”
                </p>
                <figcaption className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-sky-400 text-[11px] font-semibold text-slate-50 shadow-md shadow-purple-500/60">
                    {t.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-100">
                      {t.name}
                    </span>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
