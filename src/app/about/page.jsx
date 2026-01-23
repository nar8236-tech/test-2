import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with complete transparency and honesty in all our dealings with property owners and tenants.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in property management, maintenance, and customer service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We view our clients as partners and work collaboratively to achieve their property goals.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We're committed to maximizing property value and helping our clients build long-term wealth.",
    },
  ];

  const milestones = [
    { year: "2014", event: "Founded Proper Management LLC in Tilton, NH" },
    {
      year: "2016",
      event: "Expanded to commercial property management services",
    },
    { year: "2018", event: "Reached 100+ properties under management" },
    { year: "2021", event: "Implemented 24/7 tenant support system" },
    {
      year: "2024",
      event: "Surpassed 250+ properties managed across New Hampshire",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Proper Management
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in residential and commercial property
            management since 2014
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-[#708090] leading-relaxed">
            <p>
              Proper Management was founded in 2014 with a simple mission: to
              provide property owners in New Hampshire with professional,
              reliable, and transparent property management services. What
              started as a small operation managing a handful of residential
              properties has grown into a trusted partner for over 250 property
              owners across the state.
            </p>
            <p>
              Our founder recognized a gap in the market for property management
              services that truly prioritized the needs of both property owners
              and tenants. Too often, property management companies focused
              solely on collecting rent while neglecting maintenance,
              communication, and long-term property value. We set out to change
              that.
            </p>
            <p>
              Today, Proper Management is proud to serve residential and
              commercial property owners throughout New Hampshire. Our team of
              experienced professionals brings decades of combined expertise in
              real estate, property maintenance, tenant relations, and financial
              management. We've built our reputation on integrity,
              responsiveness, and results.
            </p>
            <p>
              Whether you own a single-family rental home, a multi-unit
              apartment building, or a commercial property, we treat your
              investment with the same care and attention we would give our own.
              That's the Proper Management difference.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
              <div className="w-16 h-16 bg-[#2C3539] rounded-lg flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3539] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-[#708090] leading-relaxed">
                To provide exceptional property management services that
                maximize property value, ensure tenant satisfaction, and give
                property owners peace of mind. We are committed to maintaining
                the highest standards of professionalism, integrity, and
                customer service in everything we do.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-8">
              <div className="w-16 h-16 bg-[#2C3539] rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3539] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-[#708090] leading-relaxed">
                To be the most trusted and respected property management company
                in New Hampshire, known for our unwavering commitment to
                excellence, innovation in property management practices, and the
                long-term success of our clients' real estate investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#708090] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-14 h-14 bg-[#2C3539] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3539] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#708090] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Milestones */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C3539] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-[#708090]">
              Over 10 years of growth and excellence
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#2C3539] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow pt-4">
                  <div className="bg-white border border-[#E5E7EB] rounded-lg p-6">
                    <p className="text-lg text-[#708090]">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Proper Management by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-[#E5E7EB]">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-[#E5E7EB]">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-[#E5E7EB]">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-[#E5E7EB]">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
