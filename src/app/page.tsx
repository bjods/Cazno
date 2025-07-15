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
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />
      <main>
        <Hero />
        <div className="bg-[#0f0f0f]">
          <CaseStudies />
        </div>
        <div className="bg-[#141414]">
          <Solutions />
        </div>
        <div className="bg-[#0f0f0f]">
          <Testimonials />
        </div>
        <div className="bg-[#141414]">
          <Process />
        </div>
        <div className="bg-[#0f0f0f]">
          <Features />
        </div>
        <div className="bg-[#141414]">
          <FAQ />
        </div>
        <div className="bg-[#0f0f0f]">
          <Stats />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}