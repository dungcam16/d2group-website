import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shell } from "@/components/Shell";
import { Post } from "@/types";
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const Blog = () => {
  const { t } = useLanguage();
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Blog & Tin tức</h1>
        </ScrollTriggered3D>
        <p className="text-xl text-gray-600 mb-8">{t('blog.hero.subtitle')}</p>
        <Button size="lg">{t('blog.hero.button')}</Button>
      </section>

      <Shell>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {posts?.map((post: Post) => (
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
      </Shell>
    </div>
  );
};
export default Blog;
