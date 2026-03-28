import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, MessageSquare, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Apex5 — Local Tech Support in Colchester"
        description="Apex5 is a local one-person IT support business in Colchester, Essex. Built around plain English, fair pricing and genuinely friendly help."
        path="/about"
      />

      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Apex5</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your local tech fix in Colchester.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mb-4">Why Apex5 exists</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Too many people in Colchester deal with tech stress in silence. A laptop that takes forever to start. A printer that refuses to connect. A new tablet still in its box because the setup feels overwhelming.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apex5 was started to fix that. Not with jargon-filled explanations or eye-watering invoices — but with straightforward, friendly help that makes tech less stressful.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a retiree learning to video-call your grandchildren, a student with a sluggish laptop, or a small business owner who just needs things to work — Apex5 is here to help. Locally, fairly and honestly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: MapPin, title: "Based in Colchester", desc: "Local support you can trust, right on your doorstep." },
                { icon: MessageSquare, title: "Plain English", desc: "Everything explained clearly, no tech-speak required." },
                { icon: Heart, title: "Genuinely friendly", desc: "Patient, approachable and happy to help with any question." },
                { icon: Award, title: "NVQ-qualified", desc: "Proper qualifications backing up practical, hands-on experience." },
              ].map((item) => (
                <div key={item.title} className="bg-soft-lilac rounded-lg p-5">
                  <item.icon className="w-6 h-6 text-apex-purple mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">A growing local business</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apex5 is a new business, and that's something to be upfront about. There are no invented client logos on this page, no made-up testimonials and no inflated claims. What you get is real: a qualified, friendly local tech person who turns up, sorts the problem and explains everything properly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As Apex5 grows, this page will too — with real reviews, real stories and a track record built one happy customer at a time.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
