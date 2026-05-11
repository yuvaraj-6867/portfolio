import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const current = parseInt(localStorage.getItem("portfolioViews") || "0");
    const next = current + 1;
    localStorage.setItem("portfolioViews", next.toString());
    setViews(next);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-2 bg-slate-800/80 border border-slate-700/50 text-slate-400 text-xs rounded-full backdrop-blur-sm">
      <Eye size={14} />
      <span>{views.toLocaleString()} views</span>
    </div>
  );
};

export default ViewCounter;
