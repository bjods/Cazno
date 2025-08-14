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

const logos = [
  { icon: SiSlack, color: "#4A154B", position: 0 },
  { icon: SiZapier, color: "#FF4A00", position: 0.2 },
  { icon: SiGooglesheets, color: "#0F9D58", position: 0.4 },
  { icon: SiAirtable, color: "#18BFFF", position: 0.6 },
  { icon: SiHubspot, color: "#FF7A59", position: 0.8 },
  { icon: SiNotion, color: "#000000", position: 1 },
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
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1400 600"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0"
          >
            <defs>
              {/* Gradient for the path */}
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Wrapping path */}
            <path
              id="wrapPath"
              d="M 140 90 
                 C 140 200, 140 300, 200 400
                 Q 700 500, 1200 400
                 C 1260 300, 1260 200, 1260 90"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              opacity="0.8"
            />
          </svg>
          
          {/* Positioned logos */}
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            const positions = [
              { x: "10%", y: "15%" },    // Top left
              { x: "8%", y: "40%" },     // Left side
              { x: "20%", y: "65%" },    // Bottom left
              { x: "80%", y: "65%" },    // Bottom right
              { x: "92%", y: "40%" },    // Right side
              { x: "90%", y: "15%" },    // Top right
            ];
            const pos = positions[index];
            
            return (
              <motion.div
                key={index}
                className="absolute w-24 h-24 flex items-center justify-center pointer-events-auto"
                style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{ 
                  opacity: { delay: index * 0.1, duration: 0.5 },
                  scale: { delay: index * 0.1, duration: 0.5 },
                  y: { delay: index * 0.1 + 0.5, duration: 3, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={56} style={{ color: logo.color }} />
                </motion.div>
              </motion.div>
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