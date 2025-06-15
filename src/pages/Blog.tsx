
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

// Mock post data to unblock build errors
const posts = [
  {
    slug: "chatbots-trends-2025",
    title: "Xu hướng Chatbot 2025",
    description: "Khám phá những xu hướng chatbot mới nhất giúp doanh nghiệp tăng trưởng.",
    date: "2024-06-14",
  },
  {
    slug: "ai-in-customer-service",
    title: "AI trong chăm sóc khách hàng",
    description: "AI đang thay đổi cách doanh nghiệp tương tác với khách hàng như thế nào?",
    date: "2024-05-25",
  },
  {
    slug: "digital-marketing-updates",
    title: "Cập nhật Digital Marketing",
    description: "Những thay đổi nổi bật trong ngành Digital Marketing năm nay.",
    date: "2024-04-20",
  }
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Blog & Tin tức</h1>
        </ScrollTriggered3D>
        <p className="text-xl text-gray-600 mb-8">{t('blog.hero.subtitle')}</p>
        <Button size="lg">{t('blog.hero.button')}</Button>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="group">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-sm text-muted-foreground">
                  Published: {new Date(post.date).toLocaleDateString()}
                </p>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="secondary" size="sm">
                    Read more
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
