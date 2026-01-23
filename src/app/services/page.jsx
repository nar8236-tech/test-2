import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Home,
  Building2,
  Users,
  FileText,
  CheckCircle,
  Search,
  Wrench,
  DollarSign,
  FileCheck,
  Phone,
  Shield,
  ClipboardList,
  Key,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function ServicesPage() {
  const residentialServices = [
    {
      icon: Search,
      title: "Tenant Screening",
      description:
        "Comprehensive background checks, credit reports, and rental history verification",
    },
    {
      icon: DollarSign,
      title: "Rent Collection",
      description:
        "Automated rent collection with online payment options and late payment management",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description:
        "24/7 emergency response and scheduled maintenance with vetted contractors",
    },
    {
      icon: ClipboardList,
      title: "Property Inspections",
      description:
        "Regular property inspections with detailed reports and photo documentation",
    },
    {
      icon: FileCheck,
      title: "Lease Management",
      description: "Professional lease agreements and renewal management",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Leasing",
      description:
        "Professional photography, online listings, and showing coordination",
    },
  ];

  const commercialServices = [
    {
      icon: Building2,
      title: "Portfolio Management",
      description:
        "Comprehensive management for multi-property commercial portfolios",
    },
    {
      icon: DollarSign,
      title: "Financial Reporting",
      description:
        "Detailed monthly financial statements and budget management",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Insurance coordination and liability protection strategies",
    },
    {
      icon: Wrench,
      title: "Facility Maintenance",
      description: "Preventive maintenance programs and vendor management",
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description: "Professional tenant communication and lease administration",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description:
        "Ensuring compliance with local, state, and federal regulations",
    },
  ];

  const ownerServices = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Monthly statements, expense tracking, and tax documentation",
    },
    {
      icon: ClipboardList,
      title: "Property Reports",
      description:
        "Regular updates on property condition, occupancy, and market trends",
    },
    {
      icon: TrendingUp,
      title: "Investment Analysis",
      description: "ROI tracking and recommendations for property improvements",
    },
    {
      icon: MessageSquare,
      title: "Owner Portal",
      description:
        "24/7 access to financial reports, maintenance requests, and property data",
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Lease enforcement and eviction management when necessary",
    },
    {
      icon: Key,
      title: "Vacancy Management",
      description: "Quick turnaround on vacancies with professional marketing",
    },
  ];

  const tenantServices = [
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock emergency maintenance and support hotline",
    },
    {
      icon: DollarSign,
      title: "Online Payments",
      description:
        "Convenient online rent payment with automatic payment options",
    },
    {
      icon: Wrench,
      title: "Maintenance Requests",
      description: "Easy online maintenance request submission and tracking",
    },
    {
      icon: MessageSquare,
      title: "Tenant Portal",
      description:
        "Access lease documents, payment history, and submit requests online",
    },
    {
      icon: FileText,
      title: "Clear Communication",
      description: "Transparent policies and responsive communication",
    },
    {
      icon: CheckCircle,
      title: "Move-In/Move-Out",
      description:
        "Streamlined processes with detailed inspections and documentation",
    },
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto leading-relaxed">
            Comprehensive property management solutions designed to maximize
            your investment and provide exceptional service to tenants
          </p>
        </div>
      </section>

      {/* Residential Property Management */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#2C3539] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Home size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Residential Property Management
            </h2>
            <p className="text-lg text-[#708090] max-w-3xl mx-auto">
              Full-service management for single-family homes, condos,
              townhouses, and multi-unit residential properties. We handle every
              aspect of property management so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3539] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#708090] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial Property Management */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#2C3539] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Building2 size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Commercial Property Management
            </h2>
            <p className="text-lg text-[#708090] max-w-3xl mx-auto">
              Professional management services for office buildings, retail
              spaces, industrial properties, and mixed-use developments.
              Protecting your commercial real estate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3539] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#708090] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#2C3539] rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Owner Services
            </h2>
            <p className="text-lg text-[#708090] max-w-3xl mx-auto">
              Dedicated support and tools designed specifically for property
              owners. Stay informed and in control of your investment with
              complete transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ownerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3539] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#708090] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tenant Services */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#2C3539] rounded-lg flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Tenant Services
            </h2>
            <p className="text-lg text-[#708090] max-w-3xl mx-auto">
              We believe happy tenants make for successful properties. Our
              tenant services are designed to provide responsive support and
              clear communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenantServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3539] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#708090] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#E5E7EB] mb-8 leading-relaxed">
            Contact us today to learn more about our services and how we can
            help you achieve your property management goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#2C3539] hover:bg-[#E5E7EB] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98]"
              style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              Schedule a Consultation
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
