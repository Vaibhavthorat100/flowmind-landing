"use client";

import { motion } from "framer-motion";

const features = [
  {
    tag: "Smart capture",
    title: "Every promise in chat becomes a tracked task.",
    desc: "FlowMind scans your messages for dates, owners and commitments, then turns them into structured tasks automatically.",
  },
  {
    tag: "Calendar sync",
    title: "One schedule across work and personal life.",
    desc: "Connect multiple calendars and let FlowMind place deep work, calls and follow-ups in the right slots.",
  },
  {
    tag: "Voice to structure",
    title: "Speak messy, get back clean lists.",
    desc: "Drop a voice note and receive an ordered checklist with priorities, due dates and tags.",
  },
  {
    tag: "Contextual memory",
    title: "Notes that stay linked to conversations.",
    desc: "Decisions, links and ideas stay attached to the chats where they happened — and searchable later.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4 },
  }),
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/5 bg-slate-950/70 py-16 md:py-20"
    >
      {/* background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-[520px] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(129,140,248,0.35)_0,_transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              FEATURES
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold text-slate-50 md:text-3xl">
              Built for people who live
              <br className="hidden sm:block" /> inside their chats.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 md:text-[15px]">
            Instead of asking you to adopt yet another tool, FlowMind plugs into
            WhatsApp and other channels to keep your life stitched together.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-[22px] border border-white/8 bg-gradient-to-br from-slate-900/90 via-slate-950 to-black/90 p-[1px] shadow-[0_0_25px_rgba(15,23,42,0.9)] transition"
            >
              <div className="relative h-full rounded-[20px] bg-gradient-to-br from-purple-950/40 via-slate-950/80 to-slate-950/95 p-5">
                {/* glowing blob */}
                <div className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full bg-purple-500/25 blur-3xl opacity-0 transition group-hover:opacity-100" />

                {/* icon circle */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-purple-200 ring-1 ring-purple-400/40">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-sky-400 text-[9px] text-slate-50 shadow-sm shadow-purple-500/60">
                    ✦
                  </span>
                  {feature.tag}
                </div>

                <h3 className="text-[17px] font-semibold text-slate-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium text-sky-300 opacity-0 transition group-hover:opacity-100">
                  <span>Preview this flow</span>
                  <span className="text-sm">↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
