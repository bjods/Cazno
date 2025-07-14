"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-card p-12 rounded-2xl text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let&apos;s Chat</h2>
          
          <div className="bg-secondary p-8 rounded-2xl mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center text-2xl font-bold">
                C
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Find a time to meet with
              <br />
              cazno.com
            </h3>
            <p className="text-muted-foreground mb-4">July 2025</p>
            
            <div className="bg-card p-4 rounded-lg mb-4">
              <p className="text-sm text-muted-foreground mb-2">Meeting duration</p>
              <p className="font-semibold">30 mins</p>
            </div>
            
            <div className="bg-card p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">What time works best?</p>
              <p className="font-semibold">Showing times for July 15, 2025</p>
              <p className="text-sm text-muted-foreground">UTC -04:00 Eastern Time</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition inline-block"
          >
            Schedule Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}