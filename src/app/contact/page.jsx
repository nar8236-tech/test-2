import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to answer your questions and
            help you with all your property management needs.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:603-717-8401"
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3539] mb-2">Phone</h3>
              <p className="text-[#708090] font-medium">603-717-8401</p>
            </a>

            <a
              href="mailto:propermanagementnh@gmail.com"
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3539] mb-2">Email</h3>
              <p className="text-[#708090] font-medium break-all">
                propermanagementnh@gmail.com
              </p>
            </a>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3539] mb-2">Address</h3>
              <p className="text-[#708090] font-medium">
                PO Box 60
                <br />
                Tilton, NH 03276
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2C3539] mb-2">
                Business Hours
              </h3>
              <p className="text-[#708090] font-medium">
                Mon-Fri: 9AM - 5PM
                <br />
                24/7 Emergency Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3539] mb-4">
                Schedule a Consultation
              </h2>
              <p className="text-lg text-[#708090] mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
                  Thank you for contacting us! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                      placeholder="(603) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="property-owner">I'm a Property Owner</option>
                    <option value="tenant">I'm a Tenant</option>
                    <option value="general">General Inquiry</option>
                    <option value="maintenance">Maintenance Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2C3539] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C3539] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2C3539] hover:bg-[#708090] text-white font-semibold px-8 py-4 rounded-md transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2"
                  style={{ boxShadow: "0 2px 4px rgba(44,53,57,0.2)" }}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3539] mb-4">
                Our Location
              </h2>
              <p className="text-lg text-[#708090] mb-8">
                Serving property owners and tenants throughout New Hampshire
              </p>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.0!2d-71.5!3d43.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI0JzAwLjAiTiA3McKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Proper Management Location"
                ></iframe>
              </div>

              <div className="mt-8 bg-white border border-[#E5E7EB] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2C3539] mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-[#708090]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C3539] mt-1">✓</span>
                    <span>10+ years of property management experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C3539] mt-1">✓</span>
                    <span>250+ properties successfully managed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C3539] mt-1">✓</span>
                    <span>24/7 emergency maintenance support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C3539] mt-1">✓</span>
                    <span>Transparent communication and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2C3539] mt-1">✓</span>
                    <span>Local expertise in New Hampshire market</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
