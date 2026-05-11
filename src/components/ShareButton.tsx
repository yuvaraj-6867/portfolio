import { Share2 } from "lucide-react";

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Yuvaraj - QA Engineer Portfolio",
          text: "Check out my portfolio showcasing QA and automation testing projects",
          url: window.location.href,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button
      onClick={handleShare}
      title="Share Portfolio"
      className="fixed bottom-4 right-20 z-50 p-3 bg-slate-800/80 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 rounded-full backdrop-blur-sm transition-all duration-300"
    >
      <Share2 size={18} />
    </button>
  );
};

export default ShareButton;
