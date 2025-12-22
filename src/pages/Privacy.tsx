import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg font-body text-muted-foreground space-y-6">
                <p className="text-foreground/80">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Information We Collect
                </h2>
                <p>
                  When you subscribe to our newsletter or interact with our website, we may collect personal information such as your name and email address. We also collect non-personal information through cookies and similar technologies to improve your browsing experience.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to send you our newsletter, respond to your inquiries, improve our website and services, and communicate with you about recipes, cookbooks, and related content.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Information Sharing
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Cookies
                </h2>
                <p>
                  Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect certain features of the website.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or delete your personal information. To exercise these rights or if you have any questions about this privacy policy, please contact us at hello@flavorfirst.com.
                </p>

                <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
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
