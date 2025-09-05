import { Link } from "react-router-dom";
import { Gamepad2, Facebook, Twitter, Instagram, Youtube, Twitch, Disc as Discord } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="h-8 w-8 text-accent" />
              <span className="text-2xl font-display text-glow-accent">Gaming Portal</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for gaming news, tournaments, and community. Join us and level up your gaming experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitch.tv" className="hover:text-accent transition-colors" aria-label="Twitch">
                <Twitch className="h-5 w-5" />
              </a>
              <a href="https://discord.com" className="hover:text-accent transition-colors" aria-label="Discord">
                <Discord className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="text-muted-foreground hover:text-accent transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/tournaments" className="text-muted-foreground hover:text-accent transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link to="/streams" className="text-muted-foreground hover:text-accent transition-colors">
                  Live Streams
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-accent transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-accent transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest gaming news and updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                required />

              <button
                type="submit"
                className="w-full btn-accent">

                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gaming Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>);

};

export default Footer;