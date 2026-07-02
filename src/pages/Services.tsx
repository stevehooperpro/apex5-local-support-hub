import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  ShieldCheck,
  HardDrive,
  Printer,
  Wifi,
  Heart,
  GraduationCap,
  Gamepad2,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "slow-pc-laptop-cleanup",
    icon: Monitor,
    title: "Slow PC & laptop clean-up",
    forWho: "Home users, students, anyone with a sluggish machine",
    problems: "Slow start-up, freezing, running out of space, too many programs",
    price: "From £45",
    desc: "We'll clean up your system, remove junk, update software and get your machine running like it should. No factory reset needed in most cases.",
  },
  {
    id: "virus-malware-checks",
    icon: ShieldCheck,
    title: "Virus & malware checks",
    forWho: "Anyone worried about security or pop-ups",
    problems: "Strange pop-ups, slow browsing, suspicious emails, ransomware scares",
    price: "From £55",
    desc: "A thorough scan, clean-up and protection check to keep your data safe and your device secure.",
  },
  {
    id: "new-device-setup",
    icon: HardDrive,
    title: "New laptop or PC setup",
    forWho: "Anyone who's just bought a new device",
    problems: "Overwhelming setup screens, data migration, getting everything working",
    price: "From £40",
    desc: "We'll set up your new device, transfer your files, install your apps and make sure everything is ready to use from day one.",
  },
  {
    id: "printer-wifi-setup",
    icon: Printer,
    title: "Printer, Wi-Fi & device setup",
    forWho: "Home users, families, small offices",
    problems: "Printer won't connect, Wi-Fi dead spots, smart home struggles",
    price: "£35–£55",
    desc: "Get your printer, router, smart devices and home tech talking to each other without the headaches.",
  },
  {
    id: "data-transfer-migration",
    icon: HardDrive,
    title: "Data transfer & migration",
    forWho: "Anyone switching devices or upgrading",
    problems: "Moving photos, documents, emails and settings to a new machine",
    price: "£45–£75",
    desc: "We'll safely move your files, photos, bookmarks and settings to your new device so nothing gets left behind.",
  },
  {
    id: "digital-confidence",
    icon: Heart,
    title: "Digital confidence session",
    forWho: "Older residents, anyone new to tech",
    problems: "Not sure how to use a tablet, confused by apps, worried about scams",
    price: "£35",
    desc: "A relaxed one-to-one session to build your confidence with tech. We'll cover whatever you need at your pace - from emails to video calls.",
  },
  {
    id: "student-device-support",
    icon: GraduationCap,
    title: "Student device MOT",
    forWho: "Students heading to uni or college",
    problems: "Slow laptop, outdated software, battery issues, storage full",
    price: "£30",
    desc: "A full health check for student devices - clean-up, updates, storage check and tips to keep things running smoothly all year.",
  },
  {
    id: "gaming-optimisation",
    icon: Gamepad2,
    title: "Gaming optimisation",
    forWho: "Gamers wanting better performance",
    problems: "Low FPS, lag, overheating, slow load times",
    price: "£40–£65",
    desc: "We'll tune your PC or console setup for better frame rates, lower latency and a smoother gaming experience overall.",
  },
  {
    id: "business-it-health-check",
    icon: Briefcase,
    title: "Business IT health check",
    forWho: "Small local businesses",
    problems: "Not sure if your setup is secure, efficient or reliable",
    price: "Free 30-min intro",
    desc: "A straightforward review of your business tech - Wi-Fi, devices, backups and security. We'll flag anything that needs attention.",
  },
];

const Services = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <Layout>
      <SEOHead
        title="Services - Apex5 Tech Support Colchester"
        description="Computer help, Wi-Fi fixes, device setup, virus removal and more. See the full list of tech support services from Apex5 in Colchester."
        path="/services"
      />

      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Our services</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Straightforward tech help in Colchester. Each service is explained in plain English with clear pricing - no surprises.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="space-y-8 max-w-3xl mx-auto">
            {services.map((s) => (
              <div id={s.id} key={s.id} className="bg-soft-lilac rounded-lg p-6 md:p-8 scroll-mt-24">
                <div className="flex items-start gap-4">
                  <s.icon className="w-8 h-8 text-apex-purple shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h2 className="text-xl font-bold">{s.title}</h2>
                      <span className="text-sm font-semibold text-apex-purple">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                    <div className="text-xs text-muted-foreground space-y-1 mb-4">
                      <p><strong>Who it's for:</strong> {s.forWho}</p>
                      <p><strong>Typical problems:</strong> {s.problems}</p>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contact">
                        Enquire <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-purple text-primary-foreground py-16">
        <div className="container text-center max-w-xl">
          <h2 className="text-2xl font-bold mb-4 text-primary-foreground">Not sure what you need?</h2>
          <p className="opacity-80 mb-6">Just describe the problem and Apex5 will point you in the right direction. No pressure, no hard sell.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Ask a quick question</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
