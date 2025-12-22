import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Terms of Use
              </h1>
              
              <div className="prose prose-lg font-body text-muted-foreground space-y-6">
                <p className="text-foreground/80">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing and using Flavor First, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Use of Content
                </h2>
                <p>
                  All content on this website, including recipes, photographs, text, and graphics, is owned by Flavor First and is protected by copyright laws. You may use our recipes for personal, non-commercial purposes. You may not reproduce, distribute, or republish any content without our written permission.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  User Conduct
                </h2>
                <p>
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. Prohibited behavior includes harassing or causing distress to any person and transmitting obscene or offensive content.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Disclaimer
                </h2>
                <p>
                  The recipes and cooking information provided on this website are for general informational purposes only. We make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information on this website is at your own risk.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  Flavor First shall not be liable for any damages arising from the use of this website or its content, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  External Links
                </h2>
                <p>
                  Our website may contain links to external websites. We are not responsible for the content or privacy practices of these external sites.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Contact
                </h2>
                <p>
                  If you have any questions about these Terms of Use, please contact us at hello@flavorfirst.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
