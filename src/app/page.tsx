import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <Solutions />
        <Testimonials />
        <Process />
        <Features />
        <FAQ />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}