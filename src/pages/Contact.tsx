import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const serviceOptions = [
  "Slow PC / laptop clean-up",
  "Virus & malware check",
  "New device setup",
  "Printer / Wi-Fi / device setup",
  "Data transfer / migration",
  "Digital confidence session",
  "Student device MOT",
  "Gaming optimisation",
  "Business IT health check",
  "Monthly support plan",
  "Something else",
];

const contactMethods = ["Email", "Phone", "WhatsApp"];

const Contact = () => {
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please tick the consent checkbox to continue.");
      return;
    }
    setSubmitting(true);
    // Placeholder — connect to backend later
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! Apex5 will be in touch soon.");
      (e.target as HTMLFormElement).reset();
      setConsent(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Apex5 - Get Tech Help in Colchester"
        description="Get in touch with Apex5 for friendly, local tech support in Colchester. Email, WhatsApp or fill in the form - we aim to reply quickly."
        path="/contact"
      />

      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Get in touch</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it's a quick question or a full call-out, Apex5 is happy to help. Drop a message and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-soft-lilac rounded-lg p-5">
                <Mail className="w-6 h-6 text-apex-purple mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@apex5.co.uk" className="text-sm text-apex-purple hover:underline">
                  info@apex5.co.uk
                </a>
              </div>

              <div className="bg-soft-lilac rounded-lg p-5">
                <MessageCircle className="w-6 h-6 text-apex-purple mb-3" />
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/447000000000?text=Hi%20Apex5%2C%20I%20need%20some%20tech%20help!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-apex-purple hover:underline"
                >
                  Send a WhatsApp message
                </a>
              </div>

              <div className="bg-soft-lilac rounded-lg p-5">
                <MapPin className="w-6 h-6 text-apex-purple mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Colchester, Essex</p>
              </div>

              <div className="bg-soft-lilac rounded-lg p-5">
                <Clock className="w-6 h-6 text-apex-purple mb-3" />
                <h3 className="font-semibold mb-1">Response time</h3>
                <p className="text-sm text-muted-foreground">
                  Apex5 aims to reply quickly - usually within a few hours during working days.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required maxLength={100} placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" maxLength={20} placeholder="07..." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input id="postcode" name="postcode" required maxLength={10} placeholder="CO1 1AA" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service needed *</Label>
                  <Select name="service" required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preferred_contact">Preferred contact method</Label>
                  <Select name="preferred_contact">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="How should we reply?" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactMethods.map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about the issue *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Briefly describe the problem or what you need help with..."
                    className="mt-1"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to Apex5 using my details to respond to this enquiry. See our{" "}
                    <a href="/privacy" className="text-apex-purple hover:underline">privacy policy</a>.
                  </Label>
                </div>

                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                  {submitting ? "Sending..." : "Send message"}
                </Button>
              </form>

              {/* Disclaimer */}
              <div className="mt-8 text-xs text-muted-foreground bg-soft-lilac rounded-lg p-4 space-y-1">
                <p>Please back up important files before any work is carried out.</p>
                <p>Apex5 is not responsible for pre-existing faults, data already at risk, or faulty third-party parts supplied by the customer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
