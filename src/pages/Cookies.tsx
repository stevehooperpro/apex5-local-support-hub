import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Cookies = () => {
  return (
    <Layout>
      <SEOHead
        title="Cookie Policy - Apex5"
        description="Apex5 cookie policy. How we use cookies on our website."
        path="/cookies"
      />

      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <h1 className="text-3xl font-extrabold mb-8">Cookie Policy</h1>
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

            <h2 className="text-lg font-bold text-foreground">What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website work properly and can provide information to the site owner.</p>

            <h2 className="text-lg font-bold text-foreground">How we use cookies</h2>
            <p>The Apex5 website uses only essential cookies needed for the site to function correctly. We do not currently use advertising or tracking cookies.</p>

            <h2 className="text-lg font-bold text-foreground">Essential cookies</h2>
            <p>These cookies are necessary for the website to work and cannot be switched off. They are usually set in response to actions you take, such as filling in a form or setting your preferences.</p>

            <h2 className="text-lg font-bold text-foreground">Analytics (future)</h2>
            <p>We may introduce analytics cookies in the future to understand how visitors use our site. If we do, we'll update this policy and provide an option to opt out.</p>

            <h2 className="text-lg font-bold text-foreground">Managing cookies</h2>
            <p>You can control and delete cookies through your browser settings. Blocking all cookies may affect how the website functions.</p>

            <h2 className="text-lg font-bold text-foreground">Contact</h2>
            <p>If you have questions about our use of cookies, contact us at apex5colchester@gmail.com.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
