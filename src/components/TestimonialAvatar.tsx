
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialAvatarProps {
  src: string;
  alt: string;
  fallback: string;
}

const TestimonialAvatar = ({ src, alt, fallback }: TestimonialAvatarProps) => {
  return (
    <Avatar className="w-12 h-12">
      <AvatarImage src={src} alt={alt} className="object-cover" />
      <AvatarFallback className="bg-ai-blue text-white font-semibold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
};

export default TestimonialAvatar;
