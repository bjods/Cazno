"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submission:', formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      setSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white">Get Started</h1>
            <p className="text-xl text-gray-400">
              Schedule your free consultation to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-white">Why Choose Cazno?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-white">Proven Results</h3>
                    <p className="text-gray-400">Average 35+ hours saved per week for our clients</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-white">Home Services Expertise</h3>
                    <p className="text-gray-400">Specialized in landscaping, window cleaning, pressure washing, and more</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-white">Enterprise-Ready</h3>
                    <p className="text-gray-400">Perfect for businesses doing $1M+ in revenue or with 2+ crews</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                <h3 className="font-semibold mb-2 text-white">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-gray-400">
                  <li>1. We&apos;ll reach out within 24 hours</li>
                  <li>2. Schedule a 30-minute discovery call</li>
                  <li>3. Get a custom automation roadmap</li>
                  <li>4. Start seeing results in 2-4 weeks</li>
                </ol>
              </div>
            </div>

            <div>
              {success ? (
                <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">Thank you!</h3>
                  <p className="text-gray-400">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">
                      Company *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Tell us about your business *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-white"
                      placeholder="What services do you provide? How many crews do you have? What are your biggest operational challenges?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Schedule Free Consultation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}