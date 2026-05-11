import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="text-5xl font-bold text-cyan-400 font-mono mb-4">&lt;/&gt;</div>
      <p className="text-white text-2xl font-bold mb-6">Yuvaraj</p>
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" style={{ animation: 'loading 1.3s ease-in-out forwards' }} />
      </div>
    </div>
  );
};

export default SplashScreen;
