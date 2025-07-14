"use client";

import { motion } from "framer-motion";

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
    testimonial: "Boom helped out our sales team in several workflows from Slimline to their 5 CRM. Saving our Sales Team in regards to communication with clients and the time to build out proposals.",
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
    testimonial: "Automating of Proposals and Bid Firm, when one is offering highly customized homes like we are, you need your team communicating across accounting, design and fulfillment. Boom automated our Slack notifications and improved our client communications via email for us.",
    rating: 5,
    name: "Alex Suthersan, Founder, Cool",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground">
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
              className="bg-card p-6 rounded-lg"
            >
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">{study.company}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">{study.metric}</span>
                  <span className="text-sm text-muted-foreground">{study.unit}</span>
                </div>
                {study.reduction && (
                  <p className="text-2xl font-semibold">{study.reduction}</p>
                )}
                {study.reductionDesc && (
                  <p className="text-sm text-muted-foreground">{study.reductionDesc}</p>
                )}
              </div>
              
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(study.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm italic">&ldquo;{study.testimonial}&rdquo;</p>
              </div>
              
              {study.name && (
                <p className="text-sm font-semibold">{study.name}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}