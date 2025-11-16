// components/Navbar.tsx
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-sky-400 shadow-lg shadow-indigo-500/30">
            <span className="text-lg font-semibold">FM</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              FlowMind
            </span>
            <span className="text-[11px] text-slate-400">
              AI Productivity Copilot
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:brightness-110"
          >
            Start on WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-[4px]">
            <span
              className={`h-[2px] w-5 rounded bg-slate-100 transition ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-4 self-end rounded bg-slate-100 transition ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-white/10 bg-[#020617]/95 px-4 pb-4 pt-2 text-sm text-slate-200 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-1.5 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 px-4 py-2 text-center text-sm font-semibold shadow-md shadow-indigo-500/40"
              onClick={() => setOpen(false)}
            >
              Start on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
