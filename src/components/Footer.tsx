const Footer = () => {
  return (
    <footer className="py-12 bg-muted border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">ClimbIQ</h3>
              <p className="text-muted-foreground text-sm">
                AI-powered training that prevents overtraining and maximizes climbing performance.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a></li>
                <li><a href="#specs" className="text-muted-foreground hover:text-foreground transition-colors">Technical Specs</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
                <li><a href="#returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#press" className="text-muted-foreground hover:text-foreground transition-colors">Press Kit</a></li>
                <li><a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 ClimbIQ Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2z" />
                  <path d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5z" />
                  <path d="M17 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </a>
              <a href="#youtube" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.5a2.78 2.78 0 0 0-2-2.8C19.8 3.3 12 3.3 12 3.3s-7.8 0-9.5.4a2.78 2.78 0 0 0-2 2.8A29 29 0 0 0 0 12a29 29 0 0 0 .5 5.5 2.78 2.78 0 0 0 2 2.8c1.7.4 9.5.4 9.5.4s7.8 0 9.5-.4a2.78 2.78 0 0 0 2-2.8A29 29 0 0 0 24 12a29 29 0 0 0-.5-5.5z" />
                  <path d="M9.75 15.5V8.5L15.5 12l-5.75 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;