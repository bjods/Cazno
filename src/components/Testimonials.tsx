"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Working with the Team at Boom Automations was a great experience. Their professionalism and ability to deliver made the process easy to manage. I would highly recommend them to anyone looking to automate tasks in their organization. The Web scraping tool Boom Developed for us has saved hundreds of hours of manual work and allowed us to pull data at a much more frequent basis ensuring we are consistently working with the most up-to-date information available.",
    author: "Ben Baker",
    company: "M&A Advisory Group",
    rating: 5,
  },
  {
    quote: "Boom has been instrumental in developing and implementing a complex, custom integration solution. What sets Boom apart is the ability to adapt to changing requirements while maintaining the highest quality of work. With a proactive approach to problem-solving, attention to detail, and excellent communication, Boom consistently delivers seamless integrations. For any organization seeking a skilled integration specialist, I wholeheartedly recommend Boom for their professionalism and expertise.",
    author: "Braxton Rathod",
    company: "Beanstalk Web Solutions",
    rating: 5,
  },
  {
    quote: "Boom is extremely professional and clearly knowledgeable in every project. Responses are prompt, and issues are resolved quickly. Always open to suggestions, Boom's collaborative approach makes working together a pleasure. We look forward to future collaborations.",
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
    <section className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Testimonials
          </motion.h2>
          
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-card/80 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-card/80 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-card p-8 rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
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
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}