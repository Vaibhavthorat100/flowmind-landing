export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-[#020617]">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-slate-400 text-sm">
          © 2025 FlowMind. All rights reserved.
        </p>

        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>

      </div>
    </footer>
  );
}
