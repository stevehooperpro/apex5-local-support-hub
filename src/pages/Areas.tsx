import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle } from "lucide-react";

const areas = [
  "Colchester town centre",
  "Lexden",
  "Wivenhoe",
  "Stanway",
  "Highwoods",
  "Prettygate",
  "Mile End",
  "Greenstead",
  "Rowhedge",
  "Copford",
  "Marks Tey",
  "Tiptree",
];

const Areas = () => {
  return (
    <Layout>
      <SEOHead
        title="Areas Covered — Apex5 Tech Support Colchester & Nearby"
        description="Apex5 provides on-site tech support in Colchester and nearby areas in Essex. Home visits, Wi-Fi help, laptop support and more within a 5-mile radius."
        path="/areas"
      />

      <section className="bg-soft-lilac py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Areas we cover</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Friendly tech support across Colchester and nearby areas in Essex.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-8 h-8 text-apex-purple shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">On-site support in Colchester</h2>
              <p className="text-muted-foreground leading-relaxed">
                Apex5 provides home and small business visits within approximately 5 miles (or around 30 minutes) of central Colchester. That covers most of the town and nearby villages.
              </p>
            </div>
          </div>

          <h3 className="font-semibold mb-4">Areas include:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-apex-purple shrink-0" />
                {area}
              </div>
            ))}
          </div>

          <div className="bg-soft-lilac rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2">Outside this area?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you're a bit further out, don't worry — just get in touch and Apex5 will let you know availability and any additional travel costs. Remote support is also available wherever you are.
            </p>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Check availability</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Areas;
