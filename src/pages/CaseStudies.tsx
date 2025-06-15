import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shell } from "@/components/Shell";
import { useNavigate } from "react-router-dom";
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const CaseStudies = () => {
  const navigate = useNavigate();

  const caseStudies = [
    {
      title: "Tối ưu hóa quy trình bán hàng cho chuỗi cửa hàng bán lẻ",
      description: "Giúp chuỗi cửa hàng bán lẻ tăng trưởng doanh số và cải thiện trải nghiệm khách hàng.",
      imageUrl: "/placeholder-image.jpg",
      link: "/case-studies/retail-optimization"
    },
    {
      title: "Nâng cao hiệu quả hoạt động cho công ty logistics",
      description: "Giải pháp giúp công ty logistics giảm chi phí và tăng tốc độ giao hàng.",
      imageUrl: "/placeholder-image.jpg",
      link: "/case-studies/logistics-efficiency"
    },
    {
      title: "Cải thiện trải nghiệm khách hàng cho ngân hàng số",
      description: "Ứng dụng AI giúp ngân hàng số cung cấp dịch vụ cá nhân hóa và hỗ trợ khách hàng 24/7.",
      imageUrl: "/placeholder-image.jpg",
      link: "/case-studies/digital-banking-cx"
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero section */}
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Câu chuyện thành công
          </h1>
        </ScrollTriggered3D>
        <p className="text-xl text-gray-600 mb-8">
          Khám phá cách chúng tôi đã giúp các doanh nghiệp khác đạt được thành công vượt trội.
        </p>
        <Button size="lg" onClick={() => navigate('/contact')}>Liên hệ ngay</Button>
      </section>

      {/* Case study list */}
      <Shell>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{study.description}</CardDescription>
                <img src={study.imageUrl} alt={study.title} className="mt-4 rounded-md" />
                <Button variant="link" onClick={() => navigate(study.link)} className="mt-4">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Shell>
    </div>
  );
};
export default CaseStudies;
