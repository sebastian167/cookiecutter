import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Cookie Cutter - Done-For-You Websites & Booking Automation',
  description: 'Done-for-you professional websites with automated booking schedules and SMS reminders for local service businesses. Live in 48 hours.',
  keywords: 'cookie cutter, local service business website, booking automation, custom web design, dentist website, lawn care website, barber website, cleaner website',
};

export default function Home(): JSX.Element {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* Cookie Cutter landing page layout */}
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <Industries />
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
