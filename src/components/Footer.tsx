
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ai-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D2</span>
              </div>
              <span className="font-bold text-xl">D2 Group</span>
            </div>
            <p className="text-gray-400">
              Đơn vị tiên phong trong việc cung cấp giải pháp AI Chatbot tự động, 
              giúp doanh nghiệp tối ưu hóa trải nghiệm khách hàng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Dịch vụ</Link></li>
              <li><Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Bảng giá</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liên hệ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 contact@d2group.vn</li>
              <li>📞 1900 xxxx</li>
              <li>📍 Hà Nội, Việt Nam</li>
            </ul>
          </div>

          {/* Partners & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Đối tác</h3>
            <div className="flex space-x-4">
              <div className="w-16 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                Partner 1
              </div>
              <div className="w-16 h-8 bg-gray-700 rounded flex items-center justify-center text-xs">
                Partner 2
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 D2 Group. Tất cả quyền được bảo lưu. | Chính sách bảo mật</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
