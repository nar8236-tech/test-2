import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Building2, Mail, Phone, ArrowRight } from "lucide-react";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-[#2C3539] text-white py-20 px-6"
        style={{
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Available Properties
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of professionally managed residential and
            commercial properties
          </p>
        </div>
      </section>

      {/* No Properties Available Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-12 text-center">
            <div className="w-24 h-24 bg-[#2C3539] rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 size={48} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-[#2C3539] mb-4">
              Currently No Available Properties
            </h2>
            <p className="text-lg text-[#708090] mb-6 leading-relaxed max-w-2xl mx-auto">
              We manage 250+ properties across residential and commercial
              sectors throughout New Hampshire. While we don't have any vacant
              properties at this moment, new opportunities become available
              regularly.
            </p>
            <p className="text-lg text-[#708090] mb-8 leading-relaxed max-w-2xl mx-auto">
              Check back soon for available listings or contact us to learn
              about upcoming opportunities and be the first to know when
              properties become available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#2C3539] hover:bg-[#708090] text-white font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98] flex items-center justify-center gap-2"
                style={{ boxShadow: "0 2px 4px rgba(44,53,57,0.2)" }}
              >
                Contact Us About Properties
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Inquiry Section */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Interested in Our Properties?
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Submit your information below and we'll notify you when properties
              matching your criteria become available.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                    placeholder="(603) 555-0123"
                  />
                </div>
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2C3539] mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                  placeholder="Tell us about your property requirements, budget, preferred location, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2C3539] hover:bg-[#708090] text-white font-semibold px-8 py-4 rounded-md transition-all duration-150 active:scale-[0.98]"
                style={{ boxShadow: "0 2px 4px rgba(44,53,57,0.2)" }}
              >
                Submit Property Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Our team is here to help you find the perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <a
              href="tel:603-717-8401"
              className="bg-white border border-[#E5E7EB] rounded-lg p-8 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C3539] mb-2">
                  Call Us
                </h3>
                <p className="text-[#708090] mb-2">
                  Speak with our team directly
                </p>
                <p className="text-[#2C3539] font-semibold">603-717-8401</p>
              </div>
            </a>

            <a
              href="mailto:propermanagementnh@gmail.com"
              className="bg-white border border-[#E5E7EB] rounded-lg p-8 hover:shadow-lg transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2C3539] mb-2">
                  Email Us
                </h3>
                <p className="text-[#708090] mb-2">Send us your questions</p>
                <p className="text-[#2C3539] font-semibold break-all">
                  propermanagementnh@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
