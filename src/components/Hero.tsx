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
  SiDropbox,
  SiGmail,
} from "react-icons/si";

const logos = [
  { icon: SiSlack, x: 150, y: 120 },
  { icon: SiZapier, x: 300, y: 200 },
  { icon: SiGooglesheets, x: 450, y: 180 },
  { icon: SiNotion, x: 600, y: 240 },
  { icon: SiHubspot, x: 750, y: 220 },
  { icon: SiAirtable, x: 900, y: 280 },
  { icon: SiDropbox, x: 1050, y: 260 },
  { icon: SiGmail, x: 1200, y: 320 },
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
      
      {/* Static workflow path - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1350 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0"
        >
          {/* Wavy connecting line */}
          <path
            d="M 150 120 Q 225 240, 300 200 T 450 180 Q 525 260, 600 240 T 750 220 Q 825 300, 900 280 T 1050 260 Q 1125 340, 1200 320"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        
        {/* Static logos */}
        <div className="absolute inset-0">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={index}
                className="absolute w-20 h-20 flex items-center justify-center"
                style={{
                  left: `${logo.x}px`,
                  top: `${logo.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={62} className="text-white opacity-80" />
                </motion.div>
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