"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Star } from "lucide-react";

const caseStudies = [
  {
    company: "Sterling",
    metric: "5-7",
    unit: "hours saved per week",
    reduction: "30%",
    reductionDesc: "reduction in time to invoice and contract",
    testimonial: "Helped our team move from approximately 3-7 hours a week for bidding and contract prep and turning on proposals into as soon as three minutes is a game changer for our company. We've saved thousands on lost bids due to us not getting them out quickly and got thousands of lost opportunities to invoice more quickly and get payment in the bank same day for work performed.",
    rating: 5,
  },
  {
    company: "hipstc",
    metric: "35",
    unit: "hours saved per week",
    reduction: "12% Vegas",
    reductionDesc: "",
    testimonial: "Cazno helped out our sales team in several workflows from Slimline to their 5 CRM. Saving our Sales Team in regards to communication with clients and the time to build out proposals.",
    rating: 5,
  },
  {
    company: "Leading M&A Advisory Firm",
    metric: "125",
    unit: "hours saved per quarter",
    reduction: "",
    reductionDesc: "",
    testimonial: "Our firm invested CRM North Campaigns for 16 M&A processes in just the first three months. Previously, reaching out to our data at PayMarkets through benchmarking and evaluating analytics was only achievable for only the highest-value opportunities.",
    rating: 5,
    name: "Ron Soko, M&A Advisory Firm",
  },
  {
    company: "Vivid",
    metric: "10",
    unit: "hours saved per week",
    reduction: "",
    reductionDesc: "",
    testimonial: "Automating of Proposals and Bid Firm, when one is offering highly customized homes like we are, you need your team communicating across accounting, design and fulfillment. Cazno automated our Slack notifications and improved our client communications via email for us.",
    rating: 5,
    name: "Alex Suthersan, Founder, Cool",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Case Studies</h2>
          <p className="text-gray-400">
            Discover how our cutting-edge AI and automation solutions have delivered industry-leading results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl"
            >
              <div className="mb-6">
                <p className="text-sm text-blue-400 mb-2 font-semibold">{study.company}</p>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{study.metric}</span>
                    <span className="text-sm text-gray-400">{study.unit}</span>
                  </div>
                  <Clock className="text-blue-500" size={32} />
                </div>
                {study.reduction && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-green-500" size={20} />
                    <span className="text-xl font-semibold text-green-400">{study.reduction}</span>
                    {study.reductionDesc && (
                      <span className="text-sm text-gray-400">{study.reductionDesc}</span>
                    )}
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-800 pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(study.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic mb-4">&ldquo;{study.testimonial}&rdquo;</p>
                
                {study.name && (
                  <p className="text-sm font-semibold text-gray-400">— {study.name}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}