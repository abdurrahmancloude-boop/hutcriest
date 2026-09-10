import React from 'react';
import { Phone, MapPin, Instagram, Clock, Navigation, ExternalLink, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-[#ECE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7DC] text-[#8F3E1A] text-xs font-bold uppercase tracking-wider mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#C25E2E]" />
            <span>Visit or Order</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-[#231F1C] tracking-tight mb-2"
          >
            Contact & Location
          </h2>
          <p className="text-sm sm:text-base text-[#685F55]">
            Serving fresh fast food in Commercial Market, Satellite Town, Rawalpindi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E5DCD0] shadow-2xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#231F1C]">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#C25E2E] tracking-wide uppercase mt-0.5">
                  Pizza & Fast Food Restaurant
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F4EDE4] text-[#C25E2E] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Location</h4>
                  <p className="text-sm text-[#5D554D] leading-relaxed">
                    Commercial Market Road, <br />
                    Satellite Town, Rawalpindi
                  </p>
                  <p className="text-xs text-[#8F8477] mt-0.5">
                    Punjab, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F4EDE4] text-[#C25E2E] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Phone Number</h4>
                  <p className="text-base font-semibold text-[#231F1C] mt-0.5">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <p className="text-xs text-[#8F8477]">
                    Call for takeaway orders & home delivery
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F4EDE4] text-[#C25E2E] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Operating Hours</h4>
                  <p className="text-sm text-[#5D554D]">
                    {RESTAURANT_INFO.hours}
                  </p>
                  <p className="text-xs text-[#8F8477]">
                    Open 7 days a week
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#F4EDE4] text-[#C25E2E] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Instagram</h4>
                  <a
                    href={RESTAURANT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#C25E2E] hover:underline font-semibold flex items-center gap-1 mt-0.5"
                  >
                    <span>@crusthut.pk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#F2ECE3] flex flex-wrap gap-3">
              {/* Clickable Phone Button */}
              <a
                id="contact-call-btn"
                href={`tel:${RESTAURANT_INFO.phoneTel}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#C25E2E] hover:bg-[#AC5024] transition-colors text-sm shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              {/* Get Directions Button */}
              <a
                id="contact-directions-btn"
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-[#231F1C] bg-[#F2EDE5] hover:bg-[#EAE2D7] border border-[#DDD3C5] transition-colors text-sm"
              >
                <Navigation className="w-4 h-4 text-[#C25E2E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Directions & Order Box */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E5DCD0] shadow-2xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
                <h3 className="font-bold text-lg text-[#231F1C]">
                  Quick Order & Takeaway Info
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF5EE] text-[#1E7743] border border-[#C6E4D0]">
                  Kitchen Open
                </span>
              </div>

              {/* Visual Map / Location representation with real Google Maps link */}
              <div className="rounded-2xl overflow-hidden border border-[#E8DEC8] bg-[#F7F3EC] p-5 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] border border-[#E2D7C8] flex items-center justify-center text-[#C25E2E]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#231F1C]">Crust Hut Rawalpindi</h5>
                    <p className="text-xs text-[#73695F]">Commercial Market Road, Satellite Town</p>
                  </div>
                </div>

                <p className="text-xs text-[#61574E] mb-4 leading-relaxed">
                  Located in the bustling heart of Commercial Market, Rawalpindi. Easy access for walk-in takeaway, curbside pickup, or fast local delivery.
                </p>

                <a
                  id="map-link-btn"
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#8A3F1D] bg-[#FFFDF9] hover:bg-[#F3EDE3] border border-[#DDD2C2] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C25E2E]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#9A8E81]" />
                </a>
              </div>

              {/* Order Advice Card */}
              <div className="p-4 rounded-xl bg-[#F8F4EE] border border-[#EAE1D5] space-y-2">
                <div className="flex items-center gap-2 text-[#231F1C] font-semibold text-xs">
                  <MessageSquare className="w-4 h-4 text-[#C25E2E]" />
                  <span>How to place an order</span>
                </div>
                <p className="text-xs text-[#665D53] leading-relaxed">
                  Browse our menu above, select your favorite dishes, then tap <strong>Order Now</strong> to review your list and place your order instantly by calling <strong>0335 4231231</strong>.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#F2ECE3] text-center text-xs text-[#877C70]">
              Delivery available across Satellite Town, Rawalpindi & adjacent sectors.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
