
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import FAQ, { FAQItem } from '@/components/FAQ';

const About = () => {
  const navigate = useNavigate();
  
  const missionFaqs: FAQItem[] = [
    {
      question: "How was the risk assessment algorithm developed?",
      answer: "Our algorithm was developed by analyzing epidemiological data specific to East African women, incorporating risk factors that are particularly relevant to this population. It was validated through clinical studies at major medical centers across East Africa."
    },
    {
      question: "How often is the assessment tool updated?",
      answer: "We update our risk assessment algorithm annually based on the latest research and epidemiological data. Our last update was in January 2024."
    },
    {
      question: "Who funds this initiative?",
      answer: "This initiative is funded through grants from international health organizations, partnerships with East African ministries of health, and donations from individuals committed to improving breast cancer outcomes in the region."
    }
  ];

  return (
    <div className="min-h-screen afya-gradient">
      {/* Hero Section */}
      <section className="py-16 bg-afya-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-40 mx-auto mb-6">
              <img 
                src="/lovable-uploads/53b74825-2733-4d4c-8e33-f9aa1baab581.png" 
                alt="Breast Cancer Awareness" 
                className="w-full h-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering East African women with personalized breast cancer risk assessments, 
              early detection resources, and prevention strategies to reduce mortality rates 
              and improve health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About AfyaRisk Aware</h2>
              <p className="text-gray-600 mb-4">
                AfyaRisk Aware was established in 2023 by a team of East African oncologists, epidemiologists, 
                and public health specialists who recognized the need for regionally-specific breast cancer 
                risk assessment tools.
              </p>
              <p className="text-gray-600 mb-4">
                Unlike generic risk calculators, our assessment is calibrated specifically for East African 
                women, taking into account the unique genetic, environmental, and lifestyle factors that 
                affect breast cancer risk in this population.
              </p>
              <p className="text-gray-600">
                Our goal is to increase awareness, promote early detection, and ultimately reduce breast 
                cancer mortality rates across East Africa through education and accessible risk assessment.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/20aee352-d6d7-4aea-a08f-5bde55e97740.png"
                  alt="Medical visualization" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "25,000+", description: "Risk assessments completed" },
              { metric: "500+", description: "Early cases detected" },
              { metric: "12", description: "East African countries served" },
              { metric: "85%", description: "User satisfaction rating" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-afya-50 rounded-xl">
                <p className="text-3xl font-bold text-afya-700 mb-2">{item.metric}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ameena Osman",
                role: "Chief Medical Officer",
                bio: "Oncologist with 15 years of experience in breast cancer research across East Africa.",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZyaWNhbiB3b21hbnx8fHx8fDE2ODQ4Nzg5MDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              },
              {
                name: "Dr. Thomas Mwangi",
                role: "Research Director",
                bio: "Epidemiologist specializing in breast cancer risk factors in Eastern African populations.",
                image: "https://images.unsplash.com/photo-1575518021941-fc6e5cc6b9bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZyaWNhbiBtYW58fHx8fHwxNjg0ODc4OTYw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              },
              {
                name: "Sarah Kimani",
                role: "Public Health Specialist",
                bio: "Leading our community outreach and educational initiatives across rural communities.",
                image: "https://images.unsplash.com/photo-1583994009785-37ec30bf9342?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZyaWNhbiB3b21hbnx8fHx8fDE2ODQ4Nzg5MDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300"
              }
            ].map((person, index) => (
              <div key={index} className="afya-card flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img 
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-afya-600 font-medium mb-3">{person.role}</p>
                <p className="text-gray-600 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ faqs={missionFaqs} title="About Our Risk Assessment" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-afya-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="w-48">
              <img 
                src="/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png" 
                alt="Pink ribbon support" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking to assess your own risk or support our work in improving breast 
            cancer outcomes across East Africa, we welcome your participation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/assessment')}
              className="bg-white text-afya-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Take Assessment
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-afya-700 font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Support Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
