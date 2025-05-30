
import Section from "@/components/ui/section";

const CookiePolicy = () => {
  return (
    <div className="pt-16">
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They are widely used to make websites work more efficiently 
                and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                D2 Group uses cookies to enhance your experience on our website and improve our services. 
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Essential website functionality</li>
                <li>User authentication and security</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalization and user preferences</li>
                <li>Marketing and advertising optimization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled. They include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Authentication cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Google Analytics cookies</li>
                  <li>Performance measurement cookies</li>
                  <li>User behavior tracking cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies enable enhanced functionality and personalization:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Language preference cookies</li>
                  <li>User interface customization cookies</li>
                  <li>Chat widget cookies</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are used to deliver relevant advertisements:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Facebook Pixel cookies</li>
                  <li>Google Ads cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may also use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Facebook:</strong> For social media integration and advertising</li>
                <li><strong>TikTok:</strong> For advertising and user engagement tracking</li>
                <li><strong>Chatbot Services:</strong> For customer support functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Browser settings: Most browsers allow you to control cookies through their settings</li>
                <li>Opt-out tools: Many advertising networks provide opt-out mechanisms</li>
                <li>Privacy settings: You can adjust privacy settings on social media platforms</li>
                <li>Cookie consent management: Use our cookie consent banner to manage preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Retention</h2>
              <p className="text-gray-700 mb-4">
                Different types of cookies are stored for different periods:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until they expire or are deleted</li>
                <li><strong>Analytics cookies:</strong> Typically stored for 2 years</li>
                <li><strong>Marketing cookies:</strong> Usually stored for 30-90 days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Under applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Know what cookies are being used</li>
                <li>Refuse or accept cookies</li>
                <li>Withdraw consent at any time</li>
                <li>Request deletion of cookies</li>
                <li>Access information about cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. Please check this page regularly 
                for updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>D2 Group - AI & Automation</strong><br/>
                  Email: contact@d2group.co<br/>
                  Phone: +84 90909 9421<br/>
                  Address: No. 3 Nguyễn Cơ Thạch Street, An Lợi Đông Ward, Thủ Đức City, Ho Chi Minh City, Vietnam
                </p>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CookiePolicy;
