import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* ===== Support Section ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/safety" className="hover:underline">Get help with a safety issue</Link></li>
            <li><Link to="/aircover" className="hover:underline">AirCover</Link></li>
            <li><Link to="/anti-discrimination" className="hover:underline">Anti-discrimination</Link></li>
            <li><Link to="/disability-support" className="hover:underline">Disability support</Link></li>
            <li><Link to="/cancellation" className="hover:underline">Cancellation options</Link></li>
            <li><Link to="/neighborhood" className="hover:underline">Report neighborhood concern</Link></li>
          </ul>
        </div>

        {/* ===== Hosting Section ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Hosting</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/host-home" className="hover:underline">Airbnb your home</Link></li>
            <li><Link to="/host-experience" className="hover:underline">Airbnb your experience</Link></li>
            <li><Link to="/host-service" className="hover:underline">Airbnb your service</Link></li>
            <li><Link to="/aircover-hosts" className="hover:underline">AirCover for Hosts</Link></li>
            <li><Link to="/resources" className="hover:underline">Hosting resources</Link></li>
            <li><Link to="/community" className="hover:underline">Community forum</Link></li>
            <li><Link to="/responsibility" className="hover:underline">Hosting responsibly</Link></li>
            <li><Link to="/free-class" className="hover:underline">Join a free Hosting class</Link></li>
            <li><Link to="/co-host" className="hover:underline">Find a co-host</Link></li>
          </ul>
        </div>

        {/* ===== Airbnb Section ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Airbnb</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/news" className="hover:underline">2025 Summer Release</Link></li>
            <li><Link to="/newsroom" className="hover:underline">Newsroom</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/investors" className="hover:underline">Investors</Link></li>
            <li><Link to="/gift-cards" className="hover:underline">Gift cards</Link></li>
            <li><Link to="/emergency-stays" className="hover:underline">Airbnb.org emergency stays</Link></li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-6 md:px-12">
        <p>© {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms · Sitemap</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/sitemap" className="hover:underline">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
