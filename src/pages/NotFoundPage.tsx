import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-sm">
            <AlertCircle className="w-16 h-16 text-cyan-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
          That page doesn't exist — taking you to our homepage...
        </p>

        {/* Progress indicator */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full h-2 w-full max-w-md mx-auto mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-full rounded-full animate-progress" style={{
            animation: 'progress 3s ease-out forwards'
          }} />
        </div>

        {/* Manual navigation button */}
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 font-semibold inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Go to Homepage Now
        </button>

        <style>{`
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
