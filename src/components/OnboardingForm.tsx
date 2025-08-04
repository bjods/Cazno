"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calculator, Clock, DollarSign, TrendingUp } from "lucide-react";

interface FormData {
  businessType: string;
  repetitiveTask: string;
  hoursPerWeek: string;
  avgJobValue: string;
  leadsPerMonth: string;
  currentFollowUp: string;
  name: string;
  email: string;
  phone: string;
}

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    repetitiveTask: "",
    hoursPerWeek: "",
    avgJobValue: "",
    leadsPerMonth: "",
    currentFollowUp: "",
    name: "",
    email: "",
    phone: "",
  });

  const updateFormData = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateROI = () => {
    const hoursPerWeek = parseInt(formData.hoursPerWeek) || 0;
    const avgJobValue = parseInt(formData.avgJobValue) || 0;
    const leadsPerMonth = parseInt(formData.leadsPerMonth) || 0;
    
    const hourlyCost = 50; // Assumed hourly rate
    const currentConversion = 0.1; // 10% manual follow-up rate
    const automatedConversion = 0.21; // 21% with automation (2.1x improvement)
    
    const timeSavings = hoursPerWeek * 4 * hourlyCost; // Monthly time savings
    const currentRevenue = leadsPerMonth * currentConversion * avgJobValue;
    const automatedRevenue = leadsPerMonth * automatedConversion * avgJobValue;
    const additionalRevenue = automatedRevenue - currentRevenue;
    
    return {
      timeSavings,
      additionalRevenue,
      totalMonthlyROI: timeSavings + additionalRevenue,
      annualROI: (timeSavings + additionalRevenue) * 12,
    };
  };

  const roi = calculateROI();

  const steps = [
    {
      id: "business-type",
      title: "What type of business do you run?",
      component: (
        <div className="space-y-4">
          {[
            "Service-based business",
            "E-commerce",
            "Real estate",
            "Healthcare/Medical",
            "Marketing agency",
            "Other"
          ].map((option) => (
            <button
              key={option}
              onClick={() => {
                updateFormData("businessType", option);
                setTimeout(nextStep, 300);
              }}
              className="w-full p-4 text-left bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20"
            >
              {option}
            </button>
          ))}
        </div>
      )
    },
    {
      id: "repetitive-task",
      title: "What's your most time-consuming repetitive task?",
      component: (
        <div className="space-y-4">
          <input
            type="text"
            value={formData.repetitiveTask}
            onChange={(e) => updateFormData("repetitiveTask", e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30"
            placeholder="e.g., Following up with leads, scheduling appointments..."
            autoFocus
          />
          <button
            onClick={nextStep}
            disabled={!formData.repetitiveTask}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ChevronRight size={16} />
          </button>
        </div>
      )
    },
    {
      id: "hours-per-week",
      title: "How many hours per week does this take?",
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {["5-10 hours", "10-20 hours", "20-30 hours", "30+ hours"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  updateFormData("hoursPerWeek", option.split("-")[0]);
                  setTimeout(nextStep, 300);
                }}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "avg-job-value",
      title: "What's your average job/project value?",
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {["$500-1K", "$1K-5K", "$5K-10K", "$10K+"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  const value = option.includes("10K+") ? "10000" : option.split("-")[0].replace("$", "").replace("K", "000");
                  updateFormData("avgJobValue", value);
                  setTimeout(nextStep, 300);
                }}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "leads-per-month",
      title: "How many leads do you get per month?",
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {["10-25", "25-50", "50-100", "100+"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  const value = option.includes("100+") ? "100" : option.split("-")[0];
                  updateFormData("leadsPerMonth", value);
                  setTimeout(nextStep, 300);
                }}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-white/20"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "roi-calculator",
      title: "Here's what automation could do for your business:",
      component: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 p-6 rounded-lg border border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Your ROI Calculation</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-blue-400" size={16} />
                  <span className="text-sm text-white/70">Time Savings</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  ${roi.timeSavings.toLocaleString()}/mo
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-400" size={16} />
                  <span className="text-sm text-white/70">Additional Revenue</span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  ${roi.additionalRevenue.toLocaleString()}/mo
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-primary/20 rounded-lg border border-primary/30">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-primary" size={16} />
                <span className="text-sm text-white/70">Total Monthly ROI</span>
              </div>
              <div className="text-3xl font-bold text-primary">
                ${roi.totalMonthlyROI.toLocaleString()}
              </div>
              <div className="text-sm text-white/70 mt-1">
                ${roi.annualROI.toLocaleString()} annually
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/70 mb-4">
              Ready to unlock this potential? Let's create your custom automation strategy.
            </p>
            <button
              onClick={nextStep}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Get My Custom Strategy
            </button>
          </div>
        </div>
      )
    },
    {
      id: "contact-info",
      title: "Let's get your automation strategy ready:",
      component: (
        <div className="space-y-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30"
            placeholder="Your name"
            autoFocus
          />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30"
            placeholder="Email address"
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData("phone", e.target.value)}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30"
            placeholder="Phone number"
          />
          <button
            onClick={() => {
              // Handle form submission
              console.log("Form submitted:", formData);
              alert("Thank you! We'll be in touch within 24 hours with your custom automation strategy.");
            }}
            disabled={!formData.name || !formData.email}
            className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:bg-primary/90 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get My Free Strategy Session
          </button>
        </div>
      )
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2 text-white/50 text-sm">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              {steps[currentStep].title}
            </h2>
            
            {steps[currentStep].component}
            
            {currentStep > 0 && currentStep !== steps.length - 1 && (
              <button
                onClick={prevStep}
                className="mt-6 text-white/50 hover:text-white/70 transition"
              >
                ← Back
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}