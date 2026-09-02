import Link from "next/link";
import { primaryNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__statement">
        <span>Viveka Smaraka · Mysuru</span>
        <h2>Arise. Awake.</h2>
        <p>A living cultural youth centre carrying a historic idea forward.</p>
      </div>
      <div className="site-footer__grid">
        <div>
          <h3>Explore</h3>
          {primaryNav.slice(0, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Institution</h3>
          <Link href="/impact">Impact</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </div>
        <div>
          <h3>Visit</h3>
          <Link href="/visit">Visitor information</Link>
          <span>Mysuru, Karnataka</span>
          <span>Timings to be verified</span>
        </div>
      </div>
      <div className="site-footer__base">
        <span>© {new Date().getFullYear()} Viveka Smaraka</span>
        <span>English · ಕನ್ನಡ planned</span>
        <span>Accessibility · Privacy · Terms</span>
      </div>
    </footer>
  );
}
