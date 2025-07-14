"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Increase your team's productivity by 5-10x",
  "Gain a single source of truth over your data",
  "Systemize your workflows and unlock efficiency",
];

const benefits = [
  "Enhance productivity and save time",
  "Enhance client engagement with portals",
  "Customized solutions designed for your business needs",
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Automate with Confidence</h2>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1" size={20} />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-card text-card-foreground px-6 py-3 rounded-full inline-block hover:bg-card/80 transition"
            >
              Free Consultation •
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl relative"
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center text-xs">
                8 reports generated automatically
              </div>
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center text-xs">
                24 inquiries handled by AI Agent
              </div>
            </div>
            <div className="mt-32">
              <div className="text-6xl mb-4">📊</div>
              <div className="flex gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <div className="text-4xl">⚡</div>
                <div className="text-4xl">🎨</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold mb-4">Unite Workflows and Data</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Partner with us to seamlessly integrate and automate your existing tools and systems, creating powerful workflows that connect every aspect of your business operations for maximum efficiency and growth.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
          >
            Free Consultation
            <span className="text-lg">•</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}