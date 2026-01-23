import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div
        className="max-w-4xl mx-auto px-6 py-20"
        style={{
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C3539] mb-6">
          Privacy Policy
        </h1>
        <p className="text-[#708090] mb-8">Last Updated: January 2026</p>

        <div className="space-y-8 text-[#708090] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              1. Introduction
            </h2>
            <p>
              Proper Management LLC ("we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our property management services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-[#2C3539] mb-3">
              Personal Information
            </h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Property information and rental history</li>
              <li>
                Financial information for rent payments and property management
              </li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C3539] mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and manage property management services</li>
              <li>Process rent payments and financial transactions</li>
              <li>Communicate with you about your property or tenancy</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you important notices and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small data files stored on
              your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. However,
              disabling cookies may limit your ability to use certain features
              of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              5. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist us in operating our business</li>
              <li>
                Property owners (if you are a tenant) or tenants (if you are a
                property owner)
              </li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>Professional advisors such as lawyers and accountants</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              7. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              8. GDPR Compliance (European Users)
            </h2>
            <p>
              If you are located in the European Economic Area (EEA), we process
              your personal data in accordance with the General Data Protection
              Regulation (GDPR). We process your data based on legitimate
              interests, contractual necessity, or your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              9. CCPA Compliance (California Residents)
            </h2>
            <p className="mb-4">
              California residents have specific rights under the California
              Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising CCPA rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              10. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              12. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-6">
              <p className="font-semibold text-[#2C3539] mb-2">
                Proper Management LLC
              </p>
              <p>PO Box 60</p>
              <p>Tilton, NH 03276</p>
              <p className="mt-2">Phone: 603-717-8401</p>
              <p>Email: propermanagementnh@gmail.com</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
