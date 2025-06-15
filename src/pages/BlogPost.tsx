import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const BlogPost = () => {
  const { slug } = useParams();

  // Placeholder for blog post data
  const post = {
    title: "Tiêu đề bài viết",
    content: "Nội dung bài viết sẽ được hiển thị ở đây.",
    date: "Ngày đăng: 24/08/2024",
  };

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {/* Giả sử title lấy từ post data */}
            {post.title}
          </h1>
        </ScrollTriggered3D>
        <p className="text-gray-600">{post.date}</p>
        <p className="mt-4 text-gray-700">{post.content}</p>
        <Button variant="link" className="mt-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại trang Blog
        </Button>
      </section>
    </div>
  );
};
export default BlogPost;
