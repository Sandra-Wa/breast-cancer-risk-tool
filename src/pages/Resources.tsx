
import React from 'react';
import ResourceCard from '@/components/ResourceCard';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  const educationalResources = [
    {
      title: "Understanding Breast Cancer Risk Factors",
      description: "Learn about the key risk factors for breast cancer and how they specifically affect East African women.",
      category: "Education",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Breast Self-Examination Guide",
      description: "A step-by-step guide on how to properly perform monthly breast self-examinations.",
      category: "Prevention",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Nutrition and Breast Health",
      description: "Discover how your diet can impact breast cancer risk and which foods can help in prevention.",
      category: "Lifestyle",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  const clinicalResources = [
    {
      title: "Finding Screening Centers",
      description: "Directory of breast cancer screening facilities across East African countries with contact information.",
      category: "Healthcare",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      title: "Questions to Ask Your Doctor",
      description: "Prepare for your medical appointment with this comprehensive list of important questions about breast cancer screening and prevention.",
      category: "Healthcare",
      link: "#"
    },
    {
      title: "Screening Guidelines",
      description: "Age-specific recommendations for breast cancer screening customized for East African women.",
      category: "Guidelines",
      link: "#"
    }
  ];

  const supportResources = [
    {
      title: "Breast Cancer Support Groups",
      description: "Connect with local support groups for breast cancer survivors and those at high risk.",
      category: "Support",
      link: "#",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Financial Assistance Programs",
      description: "Information about programs that help cover the cost of breast cancer screening and treatment.",
      category: "Financial",
      link: "#"
    },
    {
      title: "Mental Health Resources",
      description: "Resources for managing anxiety and stress related to breast cancer risk and diagnosis.",
      category: "Mental Health",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen afya-gradient py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Breast Cancer Resources</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access educational materials, find screening centers, and connect with support groups to help you navigate
            breast cancer prevention and early detection.
          </p>
        </div>
        
        <Tabs defaultValue="educational" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="educational">Educational</TabsTrigger>
            <TabsTrigger value="clinical">Clinical</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          <TabsContent value="educational" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  link={resource.link}
                  imageUrl={resource.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="clinical" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  link={resource.link}
                  imageUrl={resource.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="support" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportResources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  link={resource.link}
                  imageUrl={resource.imageUrl}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Take Control of Your Breast Health</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Understanding your personal risk factors is the first step toward prevention.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate('/assessment')}
              className="afya-btn-primary"
            >
              Start Risk Assessment
            </Button>
            <Button 
              onClick={() => navigate('/about')}
              variant="outline" 
              className="afya-btn-secondary"
            >
              Learn About Our Mission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
