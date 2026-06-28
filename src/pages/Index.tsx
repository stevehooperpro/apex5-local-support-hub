import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Monitor,
  Wifi,
  Printer,
  ShieldCheck,
  HardDrive,
  Users,
  GraduationCap,
  Gamepad2,
  Briefcase,
  MapPin,
  MessageSquare,
  PoundSterling,
  ArrowRight,
  Phone,
  CheckCircle,
  Heart,
} from "lucide-react";

const trustPoints = [
  { icon: MapPin, text: "Local Colchester support" },
  { icon: MessageSquare, text: "Plain English, no tech-speak" },
  { icon: PoundSterling, text: "Fair, upfront pricing" },
  { icon: Monitor, text: "On-site and remote help" },
];

const audiences = [
  {
    icon: Heart,
    title: "Older residents & families",
    desc: "Patient, friendly help with devices, emails, video calls and everyday tech. No rushing, no confusing language.",
  },
  {
    icon: Users,
    title: "Home users",
    desc: "Slow laptops, dodgy Wi-Fi, printer nightmares sorted quickly so you can get on with your day.",
  },
  {
    icon: GraduationCap,
    title: "Students & gamers",
    desc: "Device MOTs, gaming optimisation and setup help to keep your tech running smoothly.",
  },
  {
    icon: Briefcase,
    title: "Small local businesses",
    desc: "IT health checks, network setup and ongoing support — without the big-company price tag.",
  },
];

const services = [
  { icon: Monitor, title: "Slow PC & laptop clean-up", desc: "Speed things up and get your machine running properly again." },
  { icon: HardDrive, title: "New device setup", desc: "Laptops, tablets, phones — set up and ready to use from the start." },
  { icon: Printer, title: "Printer, Wi-Fi & home tech", desc: "Get your devices talking to each other without the headaches." },
  { icon: ShieldCheck, title: "Virus & malware checks", desc: "Find and remove threats, then lock things down to keep you safe." },
  { icon: HardDrive, title: "Data transfer & migration", desc: "Move your files, photos and settings to a new device safely." },
  { icon: Heart, title: "Digital confidence sessions", desc: "Relaxed one-to-one sessions to build your confidence with tech." },
  { icon: GraduationCap, title: "Student device support", desc: "Tune-ups and health checks for laptops and devices students rely on." },
  { icon: Gamepad2, title: "Gaming optimisation", desc: "Better FPS, lower latency and a smoother gaming experience." },
  { icon: Briefcase, title: "Business IT health check", desc: "A straightforward review of your tech setup — free 30-minute intro." },
];

const pricingSnapshot = [
  { service: "On-site call-out", price: "£35", note: "first 30 minutes" },
  { service: "Remote support", price: "£25", note: "up to 30 mins" },
  { service: "Remote support", price: "£40", note: "up to 60 mins" },
  { service: "Digital confidence session", price: "£35", note: "" },
  { service: "Student device MOT", price: "£30", note: "" },
  { service: "Monthly plans", price: "from £15", note: "/month" },
];

const monthlyPlans = [
  { name: "Home Care", price: "£15/month", features: ["Priority booking", "Phone & email support", "Annual device check-up"] },
  { name: "Home Care Plus", price: "£25/month", features: ["Everything in Home Care", "Monthly remote check-in", "10% off call-outs"] },
  { name: "Micro Business Lite", price: "£75/month", features: ["Business-priority support", "Monthly health check", "Network & device monitoring"] },
];

const faqs = [
  { q: "What areas do you cover?", a: "Apex5 covers Colchester and nearby surrounding areas — roughly within 5 miles or 30 minutes of central Colchester. If you're further out, get in touch and we'll see what we can do." },
  { q: "Do you come to my home?", a: "Yes! On-site home visits are what Apex5 is all about. We come to you, sort the problem, and explain everything in plain English." },
  { q: "Do you offer remote support?", a: "Absolutely. For simpler issues, remote support is a quick and affordable option. We connect securely to your device and fix things without needing to visit." },
  { q: "What do you charge for a call-out?", a: "On-site call-outs start at £35 for the first 30 minutes. You'll always know the cost before we start." },
  { q: "Can you help older people who aren't confident with tech?", a: "That's one of the things Apex5 does best. Patient, friendly, jargon-free help at your pace. No question is too basic." },
  { q: "Can you help with gaming PCs and student laptops?", a: "Yes — from gaming optimisation and performance tuning to student device MOTs and setup help." },
  { q: "What payment methods do you accept?", a: "Bank transfer and cash. Card payments coming soon." },
  { q: "What if my device needs parts?", a: "We'll let you know upfront. Parts are charged separately at cost and we'll always explain before ordering anything." },
  { q: "Do I need to back up my files first?", a: "We always recommend backing up important files before any work. Apex5 takes care, but it's your safety net too." },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Apex5 — Friendly Local Tech Support in Colchester"
        description="Apex5 provides friendly, affordable tech support in Colchester. Slow laptops, Wi-Fi issues, device setup, printer help and more — in plain English, at fair prices."
        path="/"
      />

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Apex5",
            description: "Friendly local tech support in Colchester, Essex. Helping with laptops, Wi-Fi, printers, device setup and everyday tech problems.",
            url: "https://apex5.co.uk",
            email: "info@apex5.co.uk",
            areaServed: { "@type": "City", name: "Colchester" },
            address: { "@type": "PostalAddress", addressLocality: "Colchester", addressRegion: "Essex", addressCountry: "GB" },
            priceRange: "£",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-soft-lilac">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-apex-purple mb-4">
              Peak tech support.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Friendly local tech support in Colchester
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Apex5 helps with slow laptops, Wi-Fi issues, device setup, printer headaches and everyday tech problems — without the jargon.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/contact">Get help today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">See services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustPoints.map((tp) => (
              <div key={tp.text} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <tp.icon className="w-5 h-5 text-apex-purple shrink-0" />
                <span>{tp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Who we help</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Whether you're a first-time tablet user or building a gaming rig, Apex5 is here to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="bg-soft-lilac rounded-lg p-6 hover:shadow-md transition-shadow">
                <a.icon className="w-8 h-8 text-apex-purple mb-4" />
                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Our services</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Straightforward tech help at fair prices. Here's what Apex5 can sort for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-background rounded-lg p-6 hover:shadow-md transition-shadow">
                <s.icon className="w-7 h-7 text-apex-purple mb-3" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">
                View all services <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Apex5 */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Apex5?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              { title: "Local, not faceless", text: "A real person in Colchester who turns up, explains things clearly and actually cares." },
              { title: "Plain English", text: "No jargon, no tech-speak. Just clear, honest explanations you can follow." },
              { title: "Fair pricing", text: "You'll always know what you're paying before any work starts. No nasty surprises." },
              { title: "Friendly support", text: "Patient, approachable and happy to answer questions — no matter how basic." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-apex-purple mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-deep-purple text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-primary-foreground">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Get in touch", desc: "Drop a message, email or WhatsApp." },
              { step: "2", title: "Book your visit", desc: "We'll arrange a time that works for you." },
              { step: "3", title: "Problem sorted", desc: "On-site or remote — we'll get it fixed." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-apex-purple text-primary-foreground font-bold text-lg mb-4">
                  {s.step}
                </span>
                <h3 className="font-semibold text-lg mb-2 text-primary-foreground">{s.title}</h3>
                <p className="text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Transparent pricing</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            No hidden fees. Here are some starting prices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {pricingSnapshot.map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-soft-lilac rounded-lg px-5 py-4">
                <span className="text-sm font-medium">{p.service}</span>
                <span className="font-bold text-apex-purple whitespace-nowrap">
                  {p.price} <span className="font-normal text-xs text-muted-foreground">{p.note}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/pricing">
                See full pricing <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Monthly support plans</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Ongoing peace of mind. Choose a plan that fits and never worry about tech again.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {monthlyPlans.map((plan) => (
              <div key={plan.name} className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-2xl font-extrabold text-apex-purple mb-4">{plan.price}</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-4 h-4 text-apex-purple shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Enquire</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="py-16 md:py-20">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Covering Colchester & nearby areas</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Apex5 provides on-site tech support within approximately 5 miles of central Colchester. That includes most of the town and nearby villages. Further afield? Just ask — we're happy to quote.
          </p>
          <Button variant="outline" asChild>
            <Link to="/areas">See areas covered</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg px-5 border-none">
                <AccordionTrigger className="text-sm font-medium text-left hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="container text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a hand with tech?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether it's a slow laptop, a Wi-Fi nightmare or just a quick question — Apex5 is here to help. Get in touch today.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:info@apex5.co.uk">Email us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
