import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  recipes: [
    { name: 'Southern Classics', href: '/recipes?category=classics' },
    { name: 'BBQ & Smokehouse', href: '/recipes?category=bbq' },
    { name: 'Comfort Food', href: '/recipes?category=comfort' },
    { name: 'Desserts', href: '/recipes?category=desserts' },
  ],
  resources: [
    { name: 'Free Recipes', href: '/subscribe' },
    { name: 'Cookbooks', href: '/cookbooks' },
    { name: 'About Me', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@flavorfirst.com' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-blog section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Flavor <span className="text-primary">First</span>
              </h3>
            </Link>
            <p className="font-body text-secondary-foreground/80 max-w-md mb-6 leading-relaxed">
              Premium Southern cooking rooted in tradition, elevated with technique, 
              and finished with bold, BBQ-inspired flavor.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Recipe Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Recipes</h4>
            <ul className="space-y-3">
              {footerLinks.recipes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Flavor First. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="font-body text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-body text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
