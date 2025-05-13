
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import FAQ, { FAQItem } from '@/components/FAQ';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const navigate = useNavigate();
  
  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  const faqs: FAQItem[] = [
    {
      question: "Who should take this assessment?",
      answer: "All East African women aged 20+ should understand their risk factors, especially those with family history of breast cancer or other concerns about their breast health."
    },
    {
      question: "How long does it take?",
      answer: "The assessment takes about 5 minutes to complete and provides immediate results."
    },
    {
      question: "Is my data private?",
      answer: "Yes, all information is confidential and stored securely. We do not share your personal health information with third parties."
    },
    {
      question: "How accurate is this assessment?",
      answer: "This assessment is based on established risk factors specifically calibrated for East African women. However, it's for informational purposes only and not a substitute for medical advice."
    },
    {
      question: "What should I do after completing the assessment?",
      answer: "Review your results and the recommended actions. If you have concerns, schedule an appointment with a healthcare provider for a clinical breast exam or further screening."
    }
  ];

  return (
    <div className="min-h-screen afya-gradient">
      {/* Hero Section */}
      <section className="afya-container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="afya-heading-lg">
              <span className="text-afya-700">Breast Cancer Risk</span> Assessment for East African Women
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Get personalized insights based on local epidemiological data to better understand your risk factors and prevention options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={handleStartAssessment}
                className="afya-btn-primary"
              >
                Start Free Assessment
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/resources')}
                className="afya-btn-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/53b74825-2733-4d4c-8e33-f9aa1baab581.png"
                alt="Breast Cancer Awareness"
                className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "1 in 28", label: "East African women affected", icon: "📊" },
              { value: "95%", label: "Treatable when caught early", icon: "🏥" },
              { value: "40%", label: "Risk reduction with prevention", icon: "🛡️" },
              { value: "80%", label: "Survival rate with early diagnosis", icon: "📈" }
            ].map((stat, index) => (
              <div key={index} className="p-4 hover:bg-afya-50 rounded-lg transition-colors duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-afya-700 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="afya-heading">How Our Assessment Helps You</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our evidence-based tool provides personalized insights to help you make informed decisions about your breast health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="afya-card hover:translate-y-[-5px] h-full">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/20aee352-d6d7-4aea-a08f-5bde55e97740.png" 
                  alt="Breast health visualization" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Risk Analysis</h3>
              <p className="text-gray-600">Receive a tailored evaluation based on your unique health profile and East African genetic factors</p>
            </div>
            
            <div className="afya-card hover:translate-y-[-5px] h-full">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/668adf61-f763-4950-8654-1adcea1d7170.png" 
                  alt="Prevention strategies" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prevention Strategies</h3>
              <p className="text-gray-600">Get actionable steps to reduce your risk factors through lifestyle changes and early detection</p>
            </div>
            
            <div className="afya-card hover:translate-y-[-5px] h-full">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/de055ee0-a17f-46ab-a39d-4205657dbf97.png" 
                  alt="Local resources" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Resources</h3>
              <p className="text-gray-600">Connect with nearby screening facilities, specialists, and support groups in your community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="afya-heading text-center mb-12">Women's Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The assessment helped me realize I needed regular screenings despite my young age. I now feel empowered with knowledge about my breast health."
              name="Sarah M."
              title="Nairobi, Kenya"
            />
            <TestimonialCard
              quote="As someone with a family history of breast cancer, this tool gave me clear guidance on what preventive steps to take and when to start mammograms."
              name="Aisha T."
              title="Dar es Salaam, Tanzania"
            />
            <TestimonialCard
              quote="I was able to discuss my risk factors with my doctor more confidently after taking this assessment. It's made a real difference in my healthcare."
              name="Rebecca K."
              title="Kampala, Uganda"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ faqs={faqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-afya-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="w-32 mx-auto mb-6">
            <img 
              src="/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png" 
              alt="Pink ribbon support" 
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Breast Health Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Early awareness leads to better outcomes. Start your personalized assessment now.
          </p>
          <Button
            onClick={handleStartAssessment}
            className="bg-white text-afya-700 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Begin Assessment Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
