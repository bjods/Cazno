"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1.",
    title: "Book a Call",
    description: "Schedule a consultation with us to discuss your needs and goals. We'll tailor our services to meet your specific requirements.",
  },
  {
    number: "2.",
    title: "Get to Work",
    description: "Our team of experts will get started on your project right away, providing regular updates and ensuring everything is on track.",
  },
  {
    number: "3.",
    title: "Get Results",
    description: "Experience the benefits of our work with tangible results that meet and exceed your expectations. Your success is our priority.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Transform Your Business</h2>
          <p className="text-muted-foreground text-lg">
            Our simple 3 step process to streamline your work
          </p>
          <Link
            href="/contact"
            className="bg-card text-card-foreground px-6 py-3 rounded-full inline-block mt-6 hover:bg-card/80 transition"
          >
            Free Consultation •
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-bold mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card/50 p-12 rounded-2xl mt-20 backdrop-blur-sm text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-8">
            Talk To An <span className="text-foreground">Expert</span>
          </h3>
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