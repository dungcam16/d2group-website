
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI chatbots",
      popular: false,
      features: [
        "Up to 1,000 conversations/month",
        "Basic chatbot templates",
        "Website integration",
        "Email support",
        "Basic analytics dashboard",
        "5 predefined workflows",
        "Standard response time"
      ]
    },
    {
      name: "Business", 
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies with higher volume needs",
      popular: true,
      features: [
        "Up to 10,000 conversations/month",
        "Custom chatbot design",
        "Multi-channel deployment",
        "CRM integrations",
        "Advanced analytics",
        "Unlimited workflows",
        "Priority support",
        "A/B testing capabilities",
        "Lead qualification",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific requirements",
      popular: false,
      features: [
        "Unlimited conversations",
        "Custom AI model training",
        "Dedicated account manager",
        "On-premise deployment option",
        "Advanced security & compliance",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantees",
        "White-label solution",
        "Advanced reporting suite"
      ]
    }
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      features: [
        { name: "Monthly Conversations", starter: "1,000", business: "10,000", enterprise: "Unlimited" },
        { name: "Chatbot Templates", starter: "Basic", business: "Advanced", enterprise: "Custom" },
        { name: "Response Time", starter: "Standard", business: "Priority", enterprise: "Instant" },
        { name: "Analytics Dashboard", starter: true, business: true, enterprise: true },
        { name: "Website Integration", starter: true, business: true, enterprise: true }
      ]
    },
    {
      category: "Channels & Integration",
      features: [
        { name: "Website Widget", starter: true, business: true, enterprise: true },
        { name: "WhatsApp Business", starter: false, business: true, enterprise: true },
        { name: "Facebook Messenger", starter: false, business: true, enterprise: true },
        { name: "CRM Integration", starter: false, business: true, enterprise: true },
        { name: "Custom API Access", starter: false, business: false, enterprise: true }
      ]
    },
    {
      category: "AI & Customization",
      features: [
        { name: "Pre-built Workflows", starter: "5", business: "Unlimited", enterprise: "Custom" },
        { name: "Custom Branding", starter: false, business: true, enterprise: true },
        { name: "A/B Testing", starter: false, business: true, enterprise: true },
        { name: "Custom AI Training", starter: false, business: false, enterprise: true },
        { name: "White-label Solution", starter: false, business: false, enterprise: true }
      ]
    },
    {
      category: "Support & Services",
      features: [
        { name: "Email Support", starter: true, business: true, enterprise: true },
        { name: "Priority Support", starter: false, business: true, enterprise: true },
        { name: "Phone Support", starter: false, business: false, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, business: false, enterprise: true },
        { name: "SLA Guarantee", starter: false, business: false, enterprise: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "What counts as a conversation?",
      answer: "A conversation is counted each time a unique user interacts with your chatbot within a 24-hour period, regardless of the number of messages exchanged."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start, and you can cancel anytime during the trial period."
    },
    {
      question: "What happens if I exceed my conversation limit?",
      answer: "If you exceed your monthly limit, additional conversations are charged at $0.10 each. We'll notify you when you're approaching your limit."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, our Enterprise plan is fully customizable. We work with you to create a solution that meets your specific requirements and compliance needs."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include comprehensive onboarding, training materials, and ongoing support. Higher-tier plans include priority support and dedicated account management."
    },
    {
      question: "Can I integrate with my existing CRM?",
      answer: "Yes, Business and Enterprise plans include CRM integrations with popular platforms like Salesforce, HubSpot, Pipedrive, and many others."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and follow strict data privacy regulations including GDPR."
    },
    {
      question: "How quickly can I get started?",
      answer: "Most customers are up and running within 24-48 hours. Our simple setup process and pre-built templates make deployment quick and easy."
    },
    {
      question: "Do you provide training for my team?",
      answer: "Yes, all plans include comprehensive training materials, video tutorials, and live training sessions for Business and Enterprise customers."
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Simple, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Choose the plan that fits your business needs. All plans include free setup, training, 
            and a 14-day free trial with no commitments.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free 14-day trial</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No setup fees</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </span>
          </div>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-blue-600 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleContactClick}
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  } text-white`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Feature Comparison Table */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Detailed Feature <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Comparison</span>
          </h2>
          <p className="text-xl text-gray-600">
            Compare all features across our pricing plans
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <tr>
                  <th className="text-left p-6 text-white font-semibold">Features</th>
                  <th className="text-center p-6 text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-white font-semibold">Business</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <>
                    <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                      <td colSpan={4} className="p-4 font-bold text-blue-600 text-lg">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${categoryIndex}-${featureIndex}`} className={featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.starter}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.business}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our pricing and plans
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-blue-600">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Started</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and see how D2 Group can transform your customer conversations. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={handleContactClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              Contact Sales
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            Questions? Our sales team is here to help you choose the right plan.
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;
