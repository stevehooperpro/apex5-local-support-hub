import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy - Apex5"
        description="Apex5 privacy policy. How we collect, use and protect your personal information."
        path="/privacy"
      />

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-extrabold mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="text-lg font-bold text-foreground">Who we are</h2>
            <p>Apex5 is a local IT support business based in Colchester, Essex. Our website address is https://apex5.co.uk. For any privacy-related queries, contact us at info@apex5.co.uk.</p>

            <h2 className="text-lg font-bold text-foreground">What data we collect</h2>
            <p>When you use our contact form, we collect your name, email address, phone number (if provided), postcode and details of your enquiry. We use this information solely to respond to your enquiry and provide our services.</p>

            <h2 className="text-lg font-bold text-foreground">How we use your data</h2>
            <p>We use your personal information to respond to enquiries, arrange service visits and communicate about our services. We do not sell, rent or share your personal data with third parties for marketing purposes.</p>

            <h2 className="text-lg font-bold text-foreground">Data storage & security</h2>
            <p>Your data is stored securely and only retained for as long as necessary to provide our services or comply with legal obligations.</p>

            <h2 className="text-lg font-bold text-foreground">Your rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us at info@apex5.co.uk to make a request.</p>

            <h2 className="text-lg font-bold text-foreground">Changes to this policy</h2>
            <p>We may update this policy from time to time. Any changes will be posted on this page.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
