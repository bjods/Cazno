"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Target, LineChart } from "lucide-react";

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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Automate with Confidence</h2>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 mt-1" size={20} />
                  <p className="text-lg text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full inline-block hover:opacity-90 transition"
            >
              Free Consultation <ArrowRight className="inline ml-2" size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-2xl relative border border-gray-800 shadow-xl"
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-24 h-24 bg-blue-500/20 rounded-lg flex items-center justify-center text-xs text-center p-2 text-blue-300">
                8 reports generated automatically
              </div>
              <div className="w-24 h-24 bg-purple-500/20 rounded-lg flex items-center justify-center text-xs text-center p-2 text-purple-300">
                24 inquiries handled by AI Agent
              </div>
            </div>
            <div className="mt-32">
              <div className="flex gap-8 items-center justify-center">
                <LineChart className="text-blue-500" size={64} />
                <Target className="text-purple-500" size={64} />
                <Zap className="text-green-500" size={64} />
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
          <h2 className="text-4xl font-bold mb-4 text-white">Unite Workflows and Data</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Partner with us to seamlessly integrate and automate your existing tools and systems, creating powerful workflows that connect every aspect of your business operations for maximum efficiency and growth.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-blue-500 mt-1" size={20} />
                <p className="text-lg text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center gap-2"
          >
            Free Consultation
            <ArrowRight className="transition-transform hover:translate-x-1" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}