
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/ui/section";

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Giant Increases Conversions by 45%",
      company: "TechMart Vietnam",
      industry: "E-commerce",
      challenge: "High cart abandonment rate and overwhelming customer inquiries during peak seasons",
      solution: "Deployed AI chatbot for product recommendations, order tracking, and instant customer support",
      results: [
        { metric: "Conversion Rate", improvement: "+45%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Cart Abandonment", improvement: "-30%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "Response Time", improvement: "< 2 sec", icon: <Clock className="w-4 h-4" /> },
        { metric: "Customer Satisfaction", improvement: "4.8/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      testimonial: "The chatbot transformed our customer experience. We're seeing record-high conversion rates and our support team can focus on complex issues.",
      author: "Nguyễn Văn Minh, CEO TechMart Vietnam"
    },
    {
      id: 2,
      title: "Healthcare Provider Reduces Wait Times by 60%",
      company: "MedCare Plus",
      industry: "Healthcare",
      challenge: "Long patient wait times for appointment booking and basic health inquiries",
      solution: "Implemented appointment scheduling bot with symptom checker and health information system",
      results: [
        { metric: "Wait Times", improvement: "-60%", icon: <Clock className="w-4 h-4" /> },
        { metric: "Appointment Bookings", improvement: "+200%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Staff Efficiency", improvement: "+40%", icon: <Users className="w-4 h-4" /> },
        { metric: "Patient Satisfaction", improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      testimonial: "Our patients love the instant response for appointments and basic health questions. It's revolutionized our patient care workflow.",
      author: "Dr. Trần Thị Lan, Medical Director"
    },
    {
      id: 3,
      title: "Financial Services Improves Lead Quality by 80%",
      company: "VietFinance Solutions",
      industry: "Financial Services", 
      challenge: "Poor lead qualification process and time-consuming customer onboarding",
      solution: "Deployed intelligent lead qualification bot with document processing and KYC automation",
      results: [
        { metric: "Lead Quality", improvement: "+80%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Onboarding Time", improvement: "-50%", icon: <Clock className="w-4 h-4" /> },
        { metric: "Conversion Rate", improvement: "+35%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "Process Efficiency", improvement: "+65%", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      testimonial: "The AI chatbot pre-qualifies leads so well that our sales team only speaks with serious prospects. Our conversion rates have never been higher.",
      author: "Lê Hoàng Nam, Sales Director"
    },
    {
      id: 4,
      title: "Education Platform Boosts Student Engagement by 70%",
      company: "EduTech Academy", 
      industry: "Education",
      challenge: "Low student engagement and high drop-out rates in online courses",
      solution: "Created AI tutor bot for 24/7 student support, course recommendations, and progress tracking",
      results: [
        { metric: "Student Engagement", improvement: "+70%", icon: <Users className="w-4 h-4" /> },
        { metric: "Course Completion", improvement: "+55%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Support Queries", improvement: "24/7", icon: <Clock className="w-4 h-4" /> },
        { metric: "Student Satisfaction", improvement: "4.7/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      testimonial: "Students have a personal AI tutor available 24/7. The improvement in engagement and completion rates has been remarkable.",
      author: "Phạm Thị Mai, Academic Director"
    },
    {
      id: 5,
      title: "Real Estate Agency Generates 3x More Qualified Leads",
      company: "PropertyPro Vietnam",
      industry: "Real Estate",
      challenge: "Difficulty qualifying serious buyers and managing high volume of property inquiries",
      solution: "Implemented property search bot with virtual tours and buyer qualification system",
      results: [
        { metric: "Qualified Leads", improvement: "+300%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Property Views", improvement: "+150%", icon: <Users className="w-4 h-4" /> },
        { metric: "Sales Cycle", improvement: "-40%", icon: <Clock className="w-4 h-4" /> },
        { metric: "Agent Productivity", improvement: "+60%", icon: <DollarSign className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      testimonial: "The chatbot pre-qualifies buyers and schedules viewings automatically. Our agents now spend time with serious buyers only.",
      author: "Vũ Minh Tuấn, Managing Director"
    },
    {
      id: 6,
      title: "Hotel Chain Achieves 90% Booking Automation",
      company: "Luxury Resorts Group",
      industry: "Hospitality",
      challenge: "Manual booking process overwhelming staff during peak tourism seasons",
      solution: "Deployed booking automation bot with room recommendations and guest service features",
      results: [
        { metric: "Booking Automation", improvement: "90%", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "Staff Workload", improvement: "-70%", icon: <Users className="w-4 h-4" /> },
        { metric: "Booking Conversion", improvement: "+40%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "Guest Satisfaction", improvement: "4.9/5", icon: <Users className="w-4 h-4" /> }
      ],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      testimonial: "Guests can book rooms, request services, and get recommendations instantly. Our occupancy rates have reached all-time highs.",
      author: "Nguyễn Thị Hoa, Operations Manager"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Real <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover how businesses across industries have transformed their customer experience 
            and achieved remarkable results with D2 Group's AI chatbot solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-gray-600">Average Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section background="white">
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {study.title}
                  </h2>
                  <p className="text-lg text-gray-600">{study.company}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-red-600">Challenge:</h3>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-blue-600">Solution:</h3>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-green-600">Results:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                          <div className="text-green-600">{result.icon}</div>
                          <div>
                            <div className="font-semibold text-green-700">{result.improvement}</div>
                            <div className="text-sm text-green-600">{result.metric}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <Card className="border-l-4 border-l-blue-600 bg-blue-50">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-blue-600 font-semibold">
                      — {study.author}
                    </cite>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                      <p className="text-blue-600 font-semibold">{study.industry}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Overview */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proven success across diverse business sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "E-commerce", icon: "🛒", metric: "+45% Sales" },
            { name: "Healthcare", icon: "🏥", metric: "-60% Wait Time" },
            { name: "Finance", icon: "🏦", metric: "+80% Lead Quality" },
            { name: "Education", icon: "🎓", metric: "+70% Engagement" },
            { name: "Real Estate", icon: "🏠", metric: "+300% Leads" },
            { name: "Hospitality", icon: "🏨", metric: "90% Automation" },
            { name: "Retail", icon: "🏪", metric: "+35% Conversion" },
            { name: "Automotive", icon: "🚗", metric: "+50% Efficiency" },
            { name: "Insurance", icon: "🛡️", metric: "+25% Claims" },
            { name: "Manufacturing", icon: "🏭", metric: "+40% Support" },
            { name: "Travel", icon: "✈️", metric: "+55% Bookings" },
            { name: "Logistics", icon: "📦", metric: "+30% Tracking" }
          ].map((industry, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
              <CardContent className="p-0">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors mb-2">
                  {industry.name}
                </h3>
                <div className="text-xs text-blue-600 font-semibold">{industry.metric}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Story</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful businesses that have transformed their customer experience with D2 Group. 
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
              Start Your Success Story
            </Button>
            <Button size="lg" variant="outline" onClick={handlePricingClick} className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
              View Pricing <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
