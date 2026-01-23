import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Property Owner",
      property: "Multi-Unit Residential",
      rating: 5,
      text: "Proper Management has been managing my 8-unit apartment building for over 3 years now. Their professionalism, attention to detail, and proactive communication have been outstanding. Rent collection is always on time, maintenance issues are handled promptly, and they've helped me maintain a 98% occupancy rate. I couldn't ask for a better property management partner.",
      date: "January 2026",
    },
    {
      name: "Michael Chen",
      role: "Commercial Property Owner",
      property: "Office Building",
      rating: 5,
      text: "As an out-of-state investor, I needed a property management company I could trust completely. Proper Management has exceeded my expectations in every way. Their monthly financial reports are detailed and transparent, they've negotiated excellent lease terms with tenants, and the building has never looked better. The peace of mind they provide is invaluable.",
      date: "December 2025",
    },
    {
      name: "Jennifer Rodriguez",
      role: "Property Owner",
      property: "Single-Family Homes",
      rating: 5,
      text: "I own three rental homes in different parts of New Hampshire, and Proper Management handles all of them seamlessly. Their tenant screening process is thorough, which has resulted in reliable, long-term tenants. When issues arise, they handle them quickly and cost-effectively. I've recommended them to several fellow investors.",
      date: "November 2025",
    },
    {
      name: "David Thompson",
      role: "Tenant",
      property: "Residential Apartment",
      rating: 5,
      text: "I've been renting through Proper Management for two years, and the experience has been excellent. The online portal makes paying rent and submitting maintenance requests incredibly easy. When my water heater broke, they had someone out within hours. It's clear they care about keeping tenants happy and properties well-maintained.",
      date: "October 2025",
    },
    {
      name: "Robert & Linda Patterson",
      role: "Property Owners",
      property: "Vacation Rental Properties",
      rating: 5,
      text: "We were hesitant to hire a property management company, but Proper Management has proven to be worth every penny. They've increased our rental income by 15% through better marketing and pricing strategies, while also reducing our vacancy periods. Their team is responsive, knowledgeable, and truly invested in our success.",
      date: "September 2025",
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
            Client Testimonials
          </h1>
          <p className="text-xl text-[#E5E7EB] max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about their experience with Proper
            Management
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#2C3539] mb-2">98%</div>
              <div className="text-[#708090] font-medium">
                Client Satisfaction Rate
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#2C3539] mb-2">
                4.9/5
              </div>
              <div className="text-[#708090] font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#2C3539] mb-2">250+</div>
              <div className="text-[#708090] font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-lg p-8 hover:shadow-lg transition-all duration-200"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#2C3539] rounded-lg flex items-center justify-center mb-6">
                  <Quote size={24} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[#2C3539] text-[#2C3539]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#708090] leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-[#E5E7EB] pt-6">
                  <div className="font-bold text-[#2C3539] text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-[#708090] text-sm mb-1">
                    {testimonial.role} • {testimonial.property}
                  </div>
                  <div className="text-[#708090] text-xs">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-xl text-[#E5E7EB] mb-8 leading-relaxed">
            Experience the Proper Management difference. Contact us today to
            learn how we can help you achieve your property management goals.
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
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C3539] font-semibold px-8 py-4 rounded-md transition-all duration-150 text-center active:scale-[0.98]"
            >
              Call 603-717-8401
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
