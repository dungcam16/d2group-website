
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ai-gradient-soft pt-16">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold gradient-text">404</h1>
          <h2 className="text-4xl font-bold text-gray-800">Không tìm thấy trang</h2>
          <p className="text-xl text-gray-600">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white">
              <Link to="/">Về trang chủ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white">
              <Link to="/contact">Liên hệ hỗ trợ</Link>
            </Button>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Mã lỗi: {location.pathname}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
