"use client";

import { motion } from "framer-motion";

const steps = [
  {
    role: "You",
    label: "Natural message",
    text: "“Hey, tomorrow remind me to review the investor deck and schedule a sync with the team.”",
  },
  {
    role: "FlowMind",
    label: "Understanding",
    text: "Understands this as 2 tasks, detects “tomorrow”, and links it to your ‘Fundraising’ workspace.",
  },
  {
    role: "FlowMind",
    label: "Plan created",
    text: "Creates a reminder, suggests a 30 min calendar slot, and adds a checklist for the sync.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-white/5 bg-[#020617] py-16 md:py-20"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-500/15 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 max-w-xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
            A tiny chat for you.
            <br className="hidden sm:block" />
            A full plan generated in the background.
          </h2>
          <p className="text-sm text-slate-400 md:text-[15px]">
            FlowMind reads your messages like a human would, but never forgets a
            single commitment or deadline.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          {/* LEFT – chat-like flow */}
          <div className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-slate-950 via-slate-950/95 to-black p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            {/* vertical neon line */}
            <div className="pointer-events-none absolute left-6 top-10 bottom-10 hidden w-px bg-gradient-to-b from-purple-500/60 via-fuchsia-400/60 to-sky-400/60 md:block" />

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18, x: index % 2 === 0 ? 10 : -10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.1 + index * 0.12, duration: 0.4 }}
                  className={`flex ${
                    index % 2 === 0 ? "justify-end md:pl-10" : "justify-start md:pr-10"
                  }`}
                >
                  <div
                    className={`relative max-w-[90%] rounded-2xl px-3 py-2.5 text-[12px] leading-relaxed md:max-w-[80%] ${
                      index === 0
                        ? "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-sky-400 text-slate-50 shadow-md shadow-purple-500/50"
                        : "bg-slate-900/90 text-slate-100 ring-1 ring-white/8 shadow-md shadow-black/60"
                    }`}
                  >
                    <div className="mb-1 flex items-center gap-2 text-[10px] font-semibold text-slate-200/80">
                      <span
                        className={`inline-flex h-4 items-center rounded-full px-1.5 ${
                          step.role === "You"
                            ? "bg-black/30 text-slate-50"
                            : "bg-purple-500/20 text-purple-100"
                        }`}
                      >
                        {step.role}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                        {step.label}
                      </span>
                    </div>
                    {step.text}
                    {/* connector dot */}
                    <span
                      className={`pointer-events-none absolute top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-400 to-sky-300 ring-4 ring-purple-500/30 md:block ${
                        index % 2 === 0 ? "-left-7" : "-right-7"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT – explanation bullets */}
          <div className="flex flex-col justify-center gap-4 rounded-3xl border border-white/8 bg-slate-950/80 p-5">
            <div className="rounded-2xl bg-purple-500/10 px-3 py-2 text-xs text-purple-100 ring-1 ring-purple-400/40">
              FlowMind doesn&apos;t just create tasks — it keeps their{" "}
              <span className="font-semibold text-purple-200">context</span>{" "}
              attached to the conversation that spawned them.
            </div>
            <ul className="space-y-3 text-[13px] text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-purple-400" />
                Understands natural language instead of commands.
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                Detects time, owner, project and urgency from a single message.
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Creates reminders, calendar events and checklists in seconds.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
