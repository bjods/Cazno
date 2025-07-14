"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    number: "01",
    title: "Workflow Automation",
    description: "In today's digital landscape, automation is key. Our Workflow Automation services help organizations streamline operations, boost productivity, and reduce manual tasks through tailored automation strategies that align with your business processes.",
  },
  {
    number: "02",
    title: "AI Agents",
    description: "In the modern business environment, AI is transformative. Our AI Agent solutions help organizations enhance decision-making, automate complex tasks, and improve operational intelligence through custom-configured AI systems that adapt to your business workflows. Book a call to see exactly where we can implement agents for you.",
  },
  {
    number: "03",
    title: "Custom Apps & Dashboards",
    description: "In today's data-driven world, visibility is crucial. Our Custom Dashboard solutions help organizations track performance, visualize key metrics, and make data-driven decisions through real-time reporting systems that adapt to your business requirements.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            Solutions Designed to
            <br />
            Streamline and Scale
          </h2>
          <p className="text-muted-foreground text-lg">
            Automate your processes, leverage AI, and track performance through dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-sm text-muted-foreground mb-4">{solution.number}</div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <Link
                href="/contact"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Book a Call
                <span className="text-lg">•</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}