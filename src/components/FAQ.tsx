"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What technology approach do you use to build automated workflows?",
    answer: "We use a combination of cutting-edge AI technologies, custom API integrations, and industry-leading automation platforms to create seamless workflows tailored to your business needs.",
  },
  {
    question: "How do AI agents contribute to business operations?",
    answer: "AI agents automate repetitive tasks, handle customer inquiries, process data, and make intelligent decisions based on your business rules, freeing up your team to focus on strategic initiatives.",
  },
  {
    question: "What is the purpose of your custom applications?",
    answer: "Our custom applications provide tailored solutions for your unique business processes, offering intuitive interfaces, real-time data visualization, and seamless integration with your existing systems.",
  },
  {
    question: "What capabilities do your dashboards offer?",
    answer: "Our dashboards provide real-time analytics, KPI tracking, automated reporting, and actionable insights that help you make data-driven decisions and monitor business performance at a glance.",
  },
  {
    question: "How does your solution impact business growth?",
    answer: "By automating workflows and leveraging AI, businesses typically see 5-10x productivity gains, reduced operational costs, improved accuracy, and the ability to scale operations without proportional increases in headcount.",
  },
  {
    question: "How long does it take to implement a solution?",
    answer: "Implementation timelines vary based on complexity, but most solutions are deployed within 2-8 weeks. We work iteratively, delivering value quickly while continuously improving based on your feedback.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including project-based, monthly retainers, and performance-based options. Contact us for a custom quote tailored to your specific needs and budget.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Most common
          <br />
          inquiries below
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 flex items-center justify-between text-left hover:text-muted-foreground transition"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}