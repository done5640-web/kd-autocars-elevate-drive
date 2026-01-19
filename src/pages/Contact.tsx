import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-50" />
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <p className="text-primary text-sm uppercase tracking-widest mb-3">
                Get in Touch
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                Contact <span className="gradient-text">Us</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Have questions about our cars? Want to schedule a viewing or discuss pricing? 
                We're here to help make your automotive dreams come true.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Instagram Card */}
                <a
                  href="https://instagram.com/kdautocars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-6 rounded-xl flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Instagram size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">Instagram</h3>
                    <p className="text-primary font-medium">@kdautocars</p>
                    <p className="text-muted-foreground text-sm">DM us for quick responses</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-6 rounded-xl flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MessageCircle size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">WhatsApp</h3>
                    <p className="text-primary font-medium">+1 (234) 567-890</p>
                    <p className="text-muted-foreground text-sm">Chat with us anytime</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+1234567890"
                  className="card-premium p-6 rounded-xl flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">Phone</h3>
                    <p className="text-primary font-medium">+1 (234) 567-890</p>
                    <p className="text-muted-foreground text-sm">Call us directly</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info@kdautocars.com"
                  className="card-premium p-6 rounded-xl flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">Email</h3>
                    <p className="text-primary font-medium">info@kdautocars.com</p>
                    <p className="text-muted-foreground text-sm">For inquiries & partnerships</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              {/* Info Side */}
              <div className="space-y-8">
                {/* Info Box */}
                <div className="card-premium p-8 rounded-xl">
                  <h3 className="font-display text-2xl text-foreground mb-6">
                    Why Choose <span className="text-primary">KD Autocars?</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Handpicked Premium Selection</p>
                        <p className="text-muted-foreground text-sm">Every vehicle in our fleet is carefully selected for quality and performance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Transparent Pricing</p>
                        <p className="text-muted-foreground text-sm">No hidden fees, competitive rates for rent and purchase</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Exceptional Service</p>
                        <p className="text-muted-foreground text-sm">Personal attention from inquiry to delivery</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Flexible Options</p>
                        <p className="text-muted-foreground text-sm">Daily, weekly, monthly rentals & financing available</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div className="card-premium p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={24} />
                    <h3 className="font-display text-xl text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">By Appointment</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card-premium p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-primary" size={24} />
                    <h3 className="font-display text-xl text-foreground">Our Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Premium automotive showroom in a prime location. 
                    Contact us for directions and viewing appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
