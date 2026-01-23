import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <p className="text-[#708090] mb-8">Last Updated: January 2026</p>

        <div className="space-y-8 text-[#708090] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Proper Management LLC website and
              services, you accept and agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use our website
              or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              2. Description of Services
            </h2>
            <p className="mb-4">
              Proper Management LLC provides residential and commercial property
              management services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tenant screening and placement</li>
              <li>Rent collection and financial management</li>
              <li>Property maintenance and repairs</li>
              <li>Lease administration</li>
              <li>Property inspections and reporting</li>
              <li>Owner and tenant support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              3. User Responsibilities
            </h2>
            <p className="mb-4">
              When using our website and services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              4. Property Owner Obligations
            </h2>
            <p className="mb-4">
              Property owners who engage our services agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate property information and documentation</li>
              <li>Maintain adequate property insurance</li>
              <li>Comply with all applicable housing laws and regulations</li>
              <li>Pay management fees and expenses as agreed</li>
              <li>Authorize necessary repairs and maintenance</li>
              <li>Provide timely responses to important matters</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              5. Tenant Obligations
            </h2>
            <p className="mb-4">Tenants in properties we manage agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pay rent on time as specified in the lease agreement</li>
              <li>Maintain the property in good condition</li>
              <li>Report maintenance issues promptly</li>
              <li>Comply with all lease terms and property rules</li>
              <li>Respect the rights of other tenants and neighbors</li>
              <li>Provide proper notice before vacating</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              6. Fees and Payments
            </h2>
            <p>
              Management fees, rent payments, and other charges are specified in
              individual service agreements and lease contracts. All payments
              must be made according to the agreed terms. Late payments may
              incur additional fees as specified in your agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Proper Management LLC or
              its content suppliers and is protected by copyright and other
              intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              8. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Proper Management LLC
              shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Damages resulting from unauthorized access to our systems</li>
              <li>Damages caused by third-party service providers</li>
              <li>
                Acts of God, natural disasters, or other events beyond our
                control
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              9. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Proper Management LLC,
              its officers, directors, employees, and agents from any claims,
              damages, losses, or expenses arising from your use of our services
              or violation of these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              10. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend access to our
              services at any time, without prior notice, for conduct that we
              believe violates these Terms of Use or is harmful to other users,
              us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              11. Dispute Resolution
            </h2>
            <p>
              Any disputes arising from these Terms of Use or our services shall
              be resolved through binding arbitration in accordance with the
              rules of the American Arbitration Association. The arbitration
              shall take place in New Hampshire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              12. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the State of New Hampshire, without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We
              will notify users of any material changes by posting the updated
              terms on our website. Your continued use of our services after
              such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms of Use is found to be
              unenforceable or invalid, that provision shall be limited or
              eliminated to the minimum extent necessary, and the remaining
              provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#2C3539] mb-4">
              15. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms of Use, please contact us:
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

          <section className="border-t border-[#E5E7EB] pt-8 mt-8">
            <p className="text-sm">
              By using our website and services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms of Use.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
