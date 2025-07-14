"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    value: "60",
    label: "SATISFIED CLIENTS",
    suffix: "+",
  },
  {
    value: "90",
    label: "SUCCESSFUL PROJECTS",
    suffix: "+",
  },
  {
    value: "35",
    label: "AVERAGE HOURS SAVED PER WEEK",
    suffix: "+",
  },
];

export default function Stats() {
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
            <h2 className="text-4xl font-bold mb-6">
              Strategies
              <br />
              that Work
            </h2>
            <Link
              href="/contact"
              className="bg-card text-card-foreground px-6 py-3 rounded-full inline-block hover:bg-card/80 transition"
            >
              Free Consultation •
            </Link>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  {stat.value}
                  <span className="text-3xl align-super">{stat.suffix}</span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card/50 p-12 rounded-2xl mt-20 backdrop-blur-sm text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            We Transform
            <br />
            Businesses
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our expertise in workflow automation, AI integration, and custom application
            development has revolutionized how businesses operate. We combine creative
            problem-solving with data-driven methodologies to deliver solutions that transform
            manual processes into streamlined, automated workflows.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg hover:bg-primary/90 transition inline-block"
          >
            Free Consultation •
          </Link>
        </motion.div>
      </div>
    </section>
  );
}