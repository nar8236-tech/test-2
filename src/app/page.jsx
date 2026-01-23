import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Home,
  Building2,
  Users,
  FileText,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Residential Management",
      description:
        "Comprehensive management services for single-family homes, apartments, and multi-unit residential properties.",
    },
    {
      icon: Building2,
      title: "Commercial Management",
      description:
        "Professional management solutions for office buildings, retail spaces, and commercial real estate portfolios.",
    },
    {
      icon: Users,
      title: "Owner Services",
      description:
        "Dedicated support for property owners including financial reporting, maintenance coordination, and tenant relations.",
    },
    {
      icon: FileText,
      title: "Tenant Services",
      description:
        "Responsive tenant support with 24/7 maintenance requests, online payment options, and clear communication.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "250+", label: "Properties Managed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const benefits = [
    "Professional property inspections and maintenance",
    "Tenant screening and placement services",
    "Rent collection and financial reporting",
    "24/7 emergency maintenance response",
    "Legal compliance and documentation",
    "Marketing and vacancy management",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-[#2C3539] text-white overflow-hidden"
        style={{
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://raw.createusercontent.com/bff409c7-101d-4cb8-a566-d043415f6b61/"
            alt="Professional property management"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C3539] via-[#2C3539]/95 to-[#2C3539]/80"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Professional Property Management You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-[#E5E7EB] mb-8 leading-relaxed">
              Expert residential and commercial property management services in
              New Hampshire. Maximizing your investment while minimizing your
              stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-white text-[#2C3539] hover:bg-[#E5E7EB] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98] flex items-center justify-center gap-2"
                style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              >
                Get a Quote
                <ArrowRight size={20} />
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3539] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98]"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2C3539] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#708090] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              Comprehensive property management solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3539] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#708090] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#2C3539] hover:text-[#708090] font-semibold transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-6">
                Why Choose Proper Management?
              </h2>
              <p className="text-lg text-[#708090] mb-6 leading-relaxed">
                With over 10 years of experience managing 250+ properties across
                New Hampshire, we understand what it takes to protect and
                maximize your real estate investment.
              </p>
              <p className="text-lg text-[#708090] mb-8 leading-relaxed">
                Our team of dedicated professionals provides personalized
                service, transparent communication, and proven results that
                property owners and tenants can rely on.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-[#2C3539] mt-1 flex-shrink-0"
                    />
                    <span className="text-[#708090]">{benefit}</span>
                  </div>
                ))}
              </div>
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-[#2C3539] hover:bg-[#708090] text-white font-semibold px-6 py-3 rounded-md transition-all duration-150 active:scale-[0.98]"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://raw.createusercontent.com/b52ad6e5-2194-4585-8294-a1b1b89a8276/"
                alt="Commercial property management"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience Professional Property Management?
          </h2>
          <p className="text-xl text-[#E5E7EB] mb-8 leading-relaxed">
            Contact us today for a free consultation and discover how we can
            help you maximize your property's potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#2C3539] hover:bg-[#E5E7EB] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              Contact Us Today
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:603-717-8401"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3539] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              603-717-8401
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
