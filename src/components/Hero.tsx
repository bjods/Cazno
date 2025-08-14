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
  SiMicrosoft,
  SiGmail,
} from "react-icons/si";

const logos = [
  { icon: SiSlack, delay: 0, duration: 20 },
  { icon: SiZapier, delay: 2.5, duration: 18 },
  { icon: SiGooglesheets, delay: 5, duration: 22 },
  { icon: SiHubspot, delay: 7.5, duration: 19 },
  { icon: SiNotion, delay: 10, duration: 21 },
  { icon: SiAirtable, delay: 12.5, duration: 17 },
  { icon: SiMicrosoft, delay: 15, duration: 20 },
  { icon: SiGmail, delay: 17.5, duration: 23 },
];

const AnimatedLogo = ({ 
  icon: Icon, 
  delay, 
  duration = 18 
}: { 
  icon: any; 
  delay: number; 
  duration?: number 
}) => {
  return (
    <motion.div
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        offsetPath: `path("M 100 100 Q 600 300 1100 500")`,
        position: "absolute",
      }}
      className="w-12 h-12"
    >
      <motion.div
        className="w-full h-full flex items-center justify-center rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={32} className="text-white opacity-70" />
      </motion.div>
    </motion.div>
  );
};

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
      
      {/* Animated workflow path - hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0"
        >
          <path
            d="M 100 100 Q 600 300 1100 500"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-800 opacity-10"
          />
        </svg>
        
        {/* Animated logos */}
        <div className="absolute inset-0">
          {logos.map((logo, index) => (
            <AnimatedLogo
              key={index}
              icon={logo.icon}
              delay={logo.delay}
              duration={logo.duration}
            />
          ))}
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