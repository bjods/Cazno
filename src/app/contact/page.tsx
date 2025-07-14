"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { createClient } from "@/lib/supabase/client";

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
  const [error, setError] = useState("");
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      if (!supabase) {
        // If Supabase is not configured, just show success
        console.log('Form submission:', formData);
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        const { error } = await supabase.from("form_submissions").insert({
          form_type: "contact",
          ...formData,
        });

        if (error) throw error;
        
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Get Started</h1>
            <p className="text-xl text-muted-foreground">
              Schedule your free consultation to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why Choose Cazno?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="text-muted-foreground">Average 35+ hours saved per week for our clients</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold">Home Services Expertise</h3>
                    <p className="text-muted-foreground">Specialized in landscaping, window cleaning, pressure washing, and more</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold">Enterprise-Ready</h3>
                    <p className="text-muted-foreground">Perfect for businesses doing $1M+ in revenue or with 2+ crews</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
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
                  <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us about your business *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="What services do you provide? How many crews do you have? What are your biggest operational challenges?"
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Schedule Free Consultation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}