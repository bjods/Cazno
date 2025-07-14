"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition inline-block"
          >
            Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}