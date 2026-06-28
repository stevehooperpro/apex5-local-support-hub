import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Info } from "lucide-react";

const oneOffPrices = [
  { service: "On-site call-out", price: "£35", note: "First 30 minutes" },
  { service: "Remote support (30 mins)", price: "£25", note: "Up to 30 minutes" },
  { service: "Remote support (60 mins)", price: "£40", note: "Up to 60 minutes" },
  { service: "Slow PC / laptop clean-up", price: "£45", note: "" },
  { service: "Virus / malware check & removal", price: "From £55", note: "" },
  { service: "New laptop or PC setup", price: "£40", note: "" },
  { service: "Printer / Wi-Fi / device setup", price: "£35–£55", note: "" },
  { service: "Data transfer / migration", price: "£45–£75", note: "" },
  { service: "Digital confidence session", price: "£35", note: "One-to-one" },
  { service: "Student device MOT", price: "£30", note: "" },
  { service: "Gaming optimisation", price: "£40–£65", note: "" },
  { service: "Business IT health check", price: "Free", note: "30-minute intro" },
];

const plans = [
  {
    name: "Home Care",
    price: "£15",
    period: "/month",
    features: ["Priority booking", "Phone & email support", "Annual device health check"],
  },
  {
    name: "Home Care Plus",
    price: "£25",
    period: "/month",
    features: ["Everything in Home Care", "Monthly remote check-in", "10% off on-site call-outs"],
    highlighted: true,
  },
  {
    name: "Micro Business Lite",
    price: "£75",
    period: "/month",
    features: ["Business-priority support", "Monthly health check", "Network & device monitoring"],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <SEOHead
        title="Pricing - Apex5 Tech Support Colchester"
        description="Clear, fair pricing for tech support in Colchester. On-site call-outs from £35, remote support from £25. No hidden fees."
        path="/pricing"
      />

      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Fair, transparent pricing</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No hidden fees, no call-centre run-around. You'll always know the cost before any work starts.
          </p>
        </div>
      </section>

      {/* One-off prices */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">One-off services</h2>
          <div className="space-y-3">
            {oneOffPrices.map((p, i) => (
              <div key={i} className="flex items-center justify-between bg-soft-lilac rounded-lg px-5 py-4">
                <div>
                  <span className="text-sm font-medium">{p.service}</span>
                  {p.note && <span className="text-xs text-muted-foreground ml-2">({p.note})</span>}
                </div>
                <span className="font-bold text-apex-purple whitespace-nowrap">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container">
          <h2 className="text-2xl font-bold mb-3 text-center">Monthly support plans</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Ongoing peace of mind for homes and small businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-background rounded-lg p-6 text-center transition-shadow hover:shadow-md ${
                  plan.highlighted ? "ring-2 ring-apex-purple" : ""
                }`}
              >
                <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-apex-purple mb-1">{plan.price}</p>
                <p className="text-xs text-muted-foreground mb-5">{plan.period}</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-apex-purple shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "default" : "outline"} size="sm" asChild className="w-full">
                  <Link to="/contact">Enquire</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12">
        <div className="container max-w-2xl">
          <div className="bg-soft-lilac rounded-lg p-6 space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-apex-purple shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Some jobs may require a custom quote - we'll always discuss this with you first.</p>
                <p>Parts are not included in service prices unless stated.</p>
                <p>We recommend backing up your important files before any work begins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container text-center">
          <Button size="lg" asChild>
            <Link to="/contact">Get a quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
