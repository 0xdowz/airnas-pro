import { Apple } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-titanium-dark pt-24 pb-12 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="flex flex-col items-start gap-6">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-apple-text rounded-full flex items-center justify-center text-space-black">
                <Logo className="w-5 h-5 ml-0.5" />
              </div>
              <span className="font-semibold text-xl tracking-tight-pro text-white">AirNas Pro</span>
            </div>
            <p className="text-apple-subtext text-sm max-w-xs">
              The ultimate AirPlay receiver engine. Designed for enthusiasts and professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Product</h4>
              <Link to="/overview" className="text-apple-subtext hover:text-white transition-colors">Overview</Link>
              <Link to="/" className="text-apple-subtext hover:text-white transition-colors">Early Access</Link>
              <Link to="/download" className="text-apple-subtext hover:text-white transition-colors">Download</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold mb-2">Resources</h4>
              <Link to="/docs" className="text-apple-subtext hover:text-white transition-colors">Documentation</Link>
              <Link to="/help" className="text-apple-subtext hover:text-white transition-colors">Help Center</Link>
              <Link to="/community" className="text-apple-subtext hover:text-white transition-colors">Community</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-apple-subtext">
          <div className="flex flex-col gap-2">
            <p>© 2026 AirNas Pro Engineering. All rights reserved.</p>
            <p>Created by <a href="https://github.com/0xdowz" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-colors font-medium">Anas Al-Jboor</a></p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
