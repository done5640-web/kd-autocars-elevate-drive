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
                Na Kontaktoni
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                Kontakt <span className="gradient-text">Neve</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Keni pyetje rreth makinave tona? Dëshironi të planifikoni një vizitë ose të diskutoni çmimet?
                Jemi këtu për t'ju ndihmuar të realizoni ëndrrat tuaja automobilistike.
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
                  href="https://instagram.com/kd.autocars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-6 rounded-xl flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Instagram size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">Instagram</h3>
                    <p className="text-primary font-medium">@kd.autocars</p>
                    <p className="text-muted-foreground text-sm">Na dërgoni mesazh për përgjigje të shpejta</p>
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
                    <p className="text-muted-foreground text-sm">Bisedoni me ne në çdo kohë</p>
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
                    <h3 className="font-display text-xl text-foreground mb-1">Telefon</h3>
                    <p className="text-primary font-medium">+1 (234) 567-890</p>
                    <p className="text-muted-foreground text-sm">Na telefononi drejtpërdrejt</p>
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
                    <p className="text-muted-foreground text-sm">Për pyetje dhe partneritete</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              {/* Info Side */}
              <div className="space-y-8">
                {/* Info Box */}
                <div className="card-premium p-8 rounded-xl">
                  <h3 className="font-display text-2xl text-foreground mb-6">
                    Pse të Zgjidhni <span className="text-primary">KD Autocars?</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Përzgjedhje Premium e Selektuar</p>
                        <p className="text-muted-foreground text-sm">Çdo automjet në flotën tonë është zgjedhur me kujdes për cilësi dhe performancë</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Çmime Transparente</p>
                        <p className="text-muted-foreground text-sm">Asnjë tarifë e fshehur, tarifa konkurruese për qira dhe blerje</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Shërbim i Jashtëzakonshëm</p>
                        <p className="text-muted-foreground text-sm">Vëmendje personale nga kërkesa deri në dorëzim</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">Opsione Fleksibël</p>
                        <p className="text-muted-foreground text-sm">Qira ditore, javore, mujore dhe financim i disponueshëm</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div className="card-premium p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary" size={24} />
                    <h3 className="font-display text-xl text-foreground">Orari i Punës</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">E Hënë - E Premte</span>
                      <span className="text-foreground">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">E Shtunë</span>
                      <span className="text-foreground">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">E Diel</span>
                      <span className="text-foreground">Me Takim</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="card-premium p-8 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-primary" size={24} />
                    <h3 className="font-display text-xl text-foreground">Lokacioni Ynë</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Salloni i automjeteve premium në një lokacion kryesor.
                    Na kontaktoni për udhëzime dhe takime për vizitë.
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
