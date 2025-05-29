
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, Rocket, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Section from "@/components/ui/section";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    areaOfInterest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://automation.d2group.co/webhook/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        }),
      });

      if (response.ok) {
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.description'),
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          areaOfInterest: "",
          message: ""
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t('contact.hero.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('contact.hero.title2')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('contact.hero.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('contact.hero.feature1.title')}</h3>
              <p className="text-gray-600 text-sm">{t('contact.hero.feature1.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('contact.hero.feature2.title')}</h3>
              <p className="text-gray-600 text-sm">{t('contact.hero.feature2.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('contact.hero.feature3.title')}</h3>
              <p className="text-gray-600 text-sm">{t('contact.hero.feature3.description')}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900">
                  {t('contact.form.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('contact.form.title2')}</span>
                </CardTitle>
                <p className="text-gray-600">
                  {t('contact.form.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t('contact.form.fields.name')}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder={t('contact.form.placeholders.name')}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('contact.form.fields.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t('contact.form.placeholders.email')}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{t('contact.form.fields.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t('contact.form.placeholders.phone')}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">{t('contact.form.fields.company')}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder={t('contact.form.placeholders.company')}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="areaOfInterest">{t('contact.form.fields.interest')}</Label>
                    <Select onValueChange={(value) => handleInputChange("areaOfInterest", value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder={t('contact.form.placeholders.interest')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">{t('contact.form.options.demo')}</SelectItem>
                        <SelectItem value="pricing">{t('contact.form.options.pricing')}</SelectItem>
                        <SelectItem value="integration">{t('contact.form.options.integration')}</SelectItem>
                        <SelectItem value="enterprise">{t('contact.form.options.enterprise')}</SelectItem>
                        <SelectItem value="support">{t('contact.form.options.support')}</SelectItem>
                        <SelectItem value="partnership">{t('contact.form.options.partnership')}</SelectItem>
                        <SelectItem value="other">{t('contact.form.options.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t('contact.form.fields.message')}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder={t('contact.form.placeholders.message')}
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    {t('contact.form.privacy')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('contact.info.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('contact.info.title2')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{t('contact.info.email.label')}</h3>
                    <p className="text-gray-600">{t('contact.info.email.value')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{t('contact.info.phone.label')}</h3>
                    <p className="text-gray-600">{t('contact.info.phone.value1')}</p>
                    <p className="text-gray-600">{t('contact.info.phone.value2')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{t('contact.info.address.label')}</h3>
                    <p className="text-gray-600">
                      {t('contact.info.address.street')}<br />
                      {t('contact.info.address.ward')}<br />
                      {t('contact.info.address.city')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{t('contact.info.hours.label')}</h3>
                    <p className="text-gray-600">
                      {t('contact.info.hours.weekdays')}<br />
                      {t('contact.info.hours.saturday')}<br />
                      <span className="text-blue-600 font-semibold">{t('contact.info.hours.emergency')}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t('contact.map.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('contact.map.title2')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.585089432689!2d106.72348467637474!3d10.766425459375347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525b0fd9e9f3f%3A0xf04a8174c09efc3c!2sD2%20GROUP!5e0!3m2!1sen!2s!4v1748530631630!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contact.map.alt')}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Success Message Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('contact.thanks.title1')} <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('contact.thanks.title2')}</span>!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('contact.thanks.subtitle')}
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              aria-label={t('contact.social.facebook')}
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              aria-label={t('contact.social.linkedin')}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              aria-label={t('contact.social.email')}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
