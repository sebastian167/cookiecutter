import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Your Business Deserves a Real Website.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Done-for-you professional websites with fully automated online booking, 
          built and launched in just 48 hours. No learning complex builders, 
          no paying agencies thousands. Christian builds it all for you.
        </p>
        <a
          href="#pricing"
          className="btn btn-primary btn-wide"
        >
          Get Your Website →
        </a>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
          alt="Cookie Cutter booking automation & website dashboard mockup"
          className="w-full rounded-2xl shadow-2xl"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
