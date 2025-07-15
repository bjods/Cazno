"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Workflow, Bot, LayoutDashboard, ArrowRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Workflow Automation",
    description: "In today's digital landscape, automation is key. Our Workflow Automation services help organizations streamline operations, boost productivity, and reduce manual tasks through tailored automation strategies that align with your business processes.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "AI Agents",
    description: "In the modern business environment, AI is transformative. Our AI Agent solutions help organizations enhance decision-making, automate complex tasks, and improve operational intelligence through custom-configured AI systems that adapt to your business workflows. Book a call to see exactly where we can implement agents for you.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Custom Apps & Dashboards",
    description: "In today's data-driven world, visibility is crucial. Our Custom Dashboard solutions help organizations track performance, visualize key metrics, and make data-driven decisions through real-time reporting systems that adapt to your business requirements.",
    icon: LayoutDashboard,
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
          <h2 className="text-5xl font-bold mb-4 text-white">
            Solutions Designed to
            <br />
            Streamline and Scale
          </h2>
          <p className="text-gray-400 text-lg">
            Automate your processes, leverage AI, and track performance through dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">{solution.number}</span>
                  <Icon className="text-blue-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                <Link
                  href="/contact"
                  className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center gap-2 group"
                >
                  Book a Call
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}