import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom';
import ScrollTriggered3D from "@/components/ScrollTriggered3D";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập đúng định dạng email.",
  }),
  phone: z.string().min(10, {
    message: "Số điện thoại phải có ít nhất 10 số.",
  }),
  message: z.string().min(10, {
    message: "Tin nhắn phải có ít nhất 10 ký tự.",
  }),
});

const Contact = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
    toast({
      title: "Cảm ơn bạn!",
      description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất.",
    })
    navigate('/');
  };

  return (
    <div className="pt-16">
      <section className="container mx-auto px-6 text-center py-16">
        <ScrollTriggered3D direction="up" delay={0.1}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Liên hệ với chúng tôi
          </h1>
        </ScrollTriggered3D>
        <p className="text-xl text-gray-600 mb-8">
          Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào.
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Gửi tin nhắn cho chúng tôi</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Tên
                </label>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} type="text" placeholder="Tên của bạn" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  )}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name?.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} type="email" placeholder="Email của bạn" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  )}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email?.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} type="tel" placeholder="Số điện thoại của bạn" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  )}
                />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone?.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Tin nhắn
                </label>
                <Controller
                  control={control}
                  name="message"
                  defaultValue=""
                  render={({ field }) => (
                    <Textarea {...field} placeholder="Tin nhắn của bạn" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  )}
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message?.message}</p>}
              </div>
              <div>
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Gửi tin nhắn <ArrowRight className="ml-2" />
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Thông tin liên hệ</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2 text-blue-500" />
                <span>Email: info@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-blue-500" />
                <span>Điện thoại: +1 555-123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-blue-500" />
                <span>Địa chỉ: 123 Main Street, Anytown, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.788727748751!2d-122.41945!3d37.7749296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a9249c499%3A0x4d204c74c626bbd7!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v16234234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default Contact;
