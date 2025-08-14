"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiSlack,
  SiZapier,
  SiGooglesheets,
  SiHubspot,
  SiNotion,
  SiAirtable,
} from "react-icons/si";

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "255, 255, 255";
};

const logos = [
  { icon: SiSlack, color: "#4A154B", x: "15%", y: "20%", size: 48, opacity: 0.8, blur: "12px" },
  { icon: SiZapier, color: "#FF4A00", x: "85%", y: "25%", size: 40, opacity: 0.6, blur: "8px" },
  { icon: SiGooglesheets, color: "#0F9D58", x: "75%", y: "60%", size: 52, opacity: 0.9, blur: "16px" },
  { icon: SiAirtable, color: "#18BFFF", x: "25%", y: "70%", size: 36, opacity: 0.5, blur: "6px" },
  { icon: SiHubspot, color: "#FF7A59", x: "65%", y: "35%", size: 44, opacity: 0.7, blur: "10px" },
  { icon: SiNotion, color: "#000000", x: "35%", y: "45%", size: 32, opacity: 0.4, blur: "4px" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-8 left-6 z-10">
        <Link href="/" className="text-2xl font-bold">
          CAZNO
        </Link>
      </div>
      <div className="absolute top-8 right-6 z-10">
        <Link
          href="/login"
          className="text-sm hover:text-muted-foreground transition"
        >
          Sign In
        </Link>
      </div>
      
      {/* Wrapping workflow path - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          
          {/* Scattered logos */}
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            const containerSize = Math.max(logo.size + 16, 64); // Container slightly bigger than icon
            
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center pointer-events-auto"
                style={{ 
                  left: logo.x, 
                  top: logo.y, 
                  transform: "translate(-50%, -50%)",
                  width: `${containerSize}px`,
                  height: `${containerSize}px`,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: `blur(${logo.blur})`,
                    WebkitBackdropFilter: `blur(${logo.blur})`,
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    opacity: logo.opacity,
                    boxShadow: `0 0 20px rgba(${logo.color === "#000000" ? "255, 255, 255" : hexToRgb(logo.color)}, 0.1)`,
                  }}
                >
                  <Icon size={logo.size} style={{ color: logo.color, opacity: logo.opacity }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6">
            <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm inline-block">
              Work Faster
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            AI Workflow
            <br />
            Automation
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Put process optimization, workflow automation, and ai agents to work.
          </p>

          <Link
            href="/onboarding"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition inline-block"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}