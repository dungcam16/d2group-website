
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      key: "testimonial1",
      author: "Nguyễn Văn Minh",
      position: "CEO, TechCorp",
      avatar: "/lovable-uploads/a3ebde84-cb4e-4b4a-bce1-55943b504a5b.png"
    },
    {
      key: "testimonial2", 
      author: "Trần Thị Lan",
      position: "Marketing Director, StartupX",
      avatar: "/lovable-uploads/b10b8a70-e57a-4e20-9232-34a4f5c4e8fb.png"
    },
    {
      key: "testimonial3",
      author: "Lê Quang Huy",
      position: "Founder, EcommercePlus",
      avatar: "/lovable-uploads/cd22248c-b4b2-4ca2-8246-5f8ac4a1d98d.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("services.testimonials.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("services.testimonials.description")}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.key} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-6 leading-relaxed">
                        "{t(`services.testimonials.${testimonial.key}.content`)}"
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
