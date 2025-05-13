
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
      imageUrl: "/lovable-uploads/20aee352-d6d7-4aea-a08f-5bde55e97740.png"
    },
    {
      title: "Breast Self-Examination Guide",
      description: "A step-by-step guide on how to properly perform monthly breast self-examinations.",
      category: "Prevention",
      link: "#",
      imageUrl: "/lovable-uploads/668adf61-f763-4950-8654-1adcea1d7170.png"
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
      imageUrl: "/lovable-uploads/20aee352-d6d7-4aea-a08f-5bde55e97740.png"
    },
    {
      title: "Questions to Ask Your Doctor",
      description: "Prepare for your medical appointment with this comprehensive list of important questions about breast cancer screening and prevention.",
      category: "Healthcare",
      link: "#",
      imageUrl: "/lovable-uploads/de055ee0-a17f-46ab-a39d-4205657dbf97.png"
    },
    {
      title: "Screening Guidelines",
      description: "Age-specific recommendations for breast cancer screening customized for East African women.",
      category: "Guidelines",
      link: "#",
      imageUrl: "/lovable-uploads/668adf61-f763-4950-8654-1adcea1d7170.png"
    }
  ];

  const supportResources = [
    {
      title: "Breast Cancer Support Groups",
      description: "Connect with local support groups for breast cancer survivors and those at high risk.",
      category: "Support",
      link: "#",
      imageUrl: "/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png"
    },
    {
      title: "Financial Assistance Programs",
      description: "Information about programs that help cover the cost of breast cancer screening and treatment.",
      category: "Financial",
      link: "#",
      imageUrl: "/lovable-uploads/53b74825-2733-4d4c-8e33-f9aa1baab581.png"
    },
    {
      title: "Mental Health Resources",
      description: "Resources for managing anxiety and stress related to breast cancer risk and diagnosis.",
      category: "Mental Health",
      link: "#",
      imageUrl: "/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png"
    }
  ];

  return (
    <div className="min-h-screen afya-gradient py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-32 mx-auto mb-6">
            <img 
              src="/lovable-uploads/53b74825-2733-4d4c-8e33-f9aa1baab581.png" 
              alt="Breast Cancer Awareness" 
              className="w-full h-auto"
            />
          </div>
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
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="w-40">
              <img 
                src="/lovable-uploads/668adf61-f763-4950-8654-1adcea1d7170.png" 
                alt="Breast self-examination" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="w-40">
              <img 
                src="/lovable-uploads/65fdcc52-45b2-43ef-b1fd-cf6ceec297e6.png" 
                alt="Pink ribbon support" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
          
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
