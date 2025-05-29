
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, MessageSquare, Brain, BarChart3, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";

const Features = () => {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      title: "Natural Language Processing",
      description: "Advanced AI that understands context, intent, and sentiment",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      details: [
        "Multi-language support with 95%+ accuracy",
        "Contextual conversation flow management", 
        "Sentiment analysis and emotion detection",
        "Intent recognition and entity extraction"
      ]
    },
    {
      title: "Omnichannel Deployment", 
      description: "Deploy across website, WhatsApp, Facebook, and more",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      details: [
        "Website chat widget with customizable UI",
        "WhatsApp Business API integration",
        "Facebook Messenger connectivity",
        "SMS and voice channel support"
      ]
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive insights into customer interactions",
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      details: [
        "Live conversation monitoring",
        "Performance metrics and KPIs",
        "Customer satisfaction scoring",
        "ROI and conversion tracking"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      details: [
        "End-to-end encryption",
        "SOC 2 Type II compliant",
        "GDPR and data privacy compliance",
        "Single sign-on (SSO) integration"
      ]
    },
    {
      title: "Instant Deployment",
      description: "Go live in minutes with our no-code platform",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      details: [
        "5-minute setup process",
        "Pre-built templates and workflows",
        "Drag-and-drop conversation builder",
        "One-click integrations"
      ]
    },
    {
      title: "Smart Conversations",
      description: "Human-like interactions that convert and engage",
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      details: [
        "Dynamic personalization",
        "Lead qualification automation",
        "Appointment booking and scheduling",
        "Product recommendations"
      ]
    }
  ];

  const comparisonTable = [
    {
      feature: "Response Time",
      traditional: "Hours to days",
      aiChatbot: "< 2 seconds",
      improvement: "99% faster"
    },
    {
      feature: "Availability", 
      traditional: "Business hours only",
      aiChatbot: "24/7/365",
      improvement: "Always on"
    },
    {
      feature: "Scalability",
      traditional: "Limited by staff",
      aiChatbot: "Unlimited conversations",
      improvement: "Infinite scale"
    },
    {
      feature: "Consistency",
      traditional: "Varies by agent",
      aiChatbot: "Always consistent",
      improvement: "100% reliable"
    },
    {
      feature: "Cost per Interaction",
      traditional: "$5-15",
      aiChatbot: "$0.10-0.50",
      improvement: "95% cost reduction"
    },
    {
      feature: "Language Support",
      traditional: "1-2 languages",
      aiChatbot: "50+ languages",
      improvement: "Global reach"
    }
  ];

  const advancedFeatures = [
    {
      category: "AI & Machine Learning",
      features: [
        {
          name: "Conversation Flow Builder",
          description: "Visual drag-and-drop interface to design complex conversation paths"
        },
        {
          name: "Intent Training",
          description: "Continuously improve AI understanding with custom training data"
        },
        {
          name: "Auto-Learning",
          description: "Machine learning algorithms that improve responses over time"
        },
        {
          name: "Fallback Handling", 
          description: "Smart escalation to human agents when needed"
        }
      ]
    },
    {
      category: "Integration & APIs",
      features: [
        {
          name: "CRM Integration",
          description: "Connect with Salesforce, HubSpot, Pipedrive, and 50+ CRMs"
        },
        {
          name: "E-commerce Platforms",
          description: "Native integration with Shopify, WooCommerce, Magento"
        },
        {
          name: "Custom APIs",
          description: "RESTful APIs for custom integrations and workflows"
        },
        {
          name: "Webhook Support",
          description: "Real-time data synchronization with external systems"
        }
      ]
    },
    {
      category: "Analytics & Reporting",
      features: [
        {
          name: "Conversation Analytics",
          description: "Deep insights into customer behavior and conversation patterns"
        },
        {
          name: "Performance Metrics",
          description: "Track resolution rate, satisfaction scores, and conversion metrics"
        },
        {
          name: "Custom Dashboards",
          description: "Build personalized reporting dashboards for stakeholders"
        },
        {
          name: "A/B Testing",
          description: "Test different conversation flows and optimize performance"
        }
      ]
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleCaseStudiesClick = () => {
    navigate('/case-studies');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span> That Drive Results
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover the comprehensive suite of AI-powered features designed to transform your customer communication 
            and drive measurable business growth.
          </p>
          <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
            See Features in Action
          </Button>
        </div>
      </Section>

      {/* Core Features */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to deliver exceptional customer experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Comparison with Traditional Live Chat */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            AI Chatbots vs <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Traditional Live Chat</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how AI-powered automation outperforms traditional customer service methods
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">Feature</th>
                  <th className="text-center p-6 text-white font-semibold">Traditional Live Chat</th>
                  <th className="text-center p-6 text-white font-semibold">AI Chatbot</th>
                  <th className="text-center p-6 text-white font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center">
                      <span className="inline-flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600">{row.traditional}</span>
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="inline-flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-900 font-semibold">{row.aiChatbot}</span>
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {row.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Advanced Features with Accordion */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Advanced <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore the deep functionality that sets D2 Group apart
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {advancedFeatures.map((category, categoryIndex) => (
              <AccordionItem key={categoryIndex} value={`item-${categoryIndex}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-xl font-semibold text-gray-900">{category.category}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-blue-600 mb-2">{feature.name}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Interactive Demo Preview */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See Our Features <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of D2 Group's AI chatbot platform with a personalized demo tailored to your business needs.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Demo</h3>
                <p className="text-gray-600">Click to experience our chatbot in action</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Real-time conversation flow</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Multi-language support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Analytics dashboard</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              Book Live Demo
            </Button>
            <Button size="lg" variant="outline" onClick={handleCaseStudiesClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
