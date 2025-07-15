"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Working with the Team at Cazno Automations was a great experience. Their professionalism and ability to deliver made the process easy to manage. I would highly recommend them to anyone looking to automate tasks in their organization. The Web scraping tool Cazno Developed for us has saved hundreds of hours of manual work and allowed us to pull data at a much more frequent basis ensuring we are consistently working with the most up-to-date information available.",
    author: "Ben Baker",
    company: "M&A Advisory Group",
    rating: 5,
  },
  {
    quote: "Cazno has been instrumental in developing and implementing a complex, custom integration solution. What sets Cazno apart is the ability to adapt to changing requirements while maintaining the highest quality of work. With a proactive approach to problem-solving, attention to detail, and excellent communication, Cazno consistently delivers seamless integrations. For any organization seeking a skilled integration specialist, I wholeheartedly recommend Cazno for their professionalism and expertise.",
    author: "Braxton Rathod",
    company: "Beanstalk Web Solutions",
    rating: 5,
  },
  {
    quote: "Cazno is extremely professional and clearly knowledgeable in every project. Responses are prompt, and issues are resolved quickly. Always open to suggestions, Cazno's collaborative approach makes working together a pleasure. We look forward to future collaborations.",
    author: "Agung Bimantara",
    company: "BHS",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white"
          >
            Client Success Stories
          </motion.h2>
          
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  
                  <p className="text-lg mb-6 text-gray-300 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}