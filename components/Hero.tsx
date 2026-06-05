import AnoAI from "@/components/ui/animated-shader-background";
import TestimonialsAvatars from "./TestimonialsAvatars";

const Hero = () => {
  return (
    <section className="relative w-full h-[650px] lg:h-[750px] overflow-hidden flex items-center justify-center bg-black">
      {/* Background WebGL Aurora Shader */}
      <div className="absolute inset-0 z-0 opacity-80">
        <AnoAI />
      </div>

      {/* Grid overlay for visual structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_50%,rgba(15,23,42,1)_100%)] z-1" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 flex flex-col items-center justify-center text-center gap-8 bg-slate-900/60 backdrop-blur-md p-10 lg:p-16 rounded-3xl border border-white/10 shadow-2xl animate-float">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight text-white leading-tight">
          Your Business Deserves <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500">
            A Premium Website
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
          Done-for-you professional websites with automated booking schedules and 
          instant SMS reminders. Custom designed, configured, and live in 48 hours. 
          Christian builds it all for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#pricing"
            className="btn btn-primary btn-wide text-black font-bold text-lg hover:scale-105 transition-transform"
          >
            Get Your Website →
          </a>
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
    </section>
  );
};

export default Hero;
