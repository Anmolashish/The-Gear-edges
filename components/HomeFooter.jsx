import Image from "next/image";
import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="footer-logo">
        <img src="/Images/update-gearlogo- (1).png" alt="Logo of Gear Edges" />
      </div>
      <div className="footer-options-section-1">
        <div className="footer-option-heading">Quick links</div>

        <Link href={"/"} className="no-decoration">
          <div className="footer-option">Home</div>
        </Link>

        <Link href={"/products"} className="no-decoration">
          <div className="footer-option">Products</div>
        </Link>
        <Link href={"/about"} className="no-decoration">
          <div className="footer-option">About</div>
        </Link>
      </div>
      <div className="footer-options-section-2">
        <div className="footer-option-heading no-cursor">&ensp;</div>
        <Link href={"/contact"} className="no-decoration">
          <div className="footer-option">Contact</div>
        </Link>
        {/* <Link href={"/review"} className="no-decoration">
          <div className="footer-option">Review</div>
        </Link> */}
        <Link href={"/infrastructure"} className="no-decoration">
          <div className="footer-option">Infrastructure</div>
        </Link>
        <div className="footer-option-heading no-cursor">&ensp;</div>
      </div>

      <div className="footer-options-section-3">
        <div className="footer-option-heading">Contact Info</div>
        <a href="mailto:sales@thegearedges.com" className="no-decoration">
          <div className="footer-option">
            <span>Email: </span>sales@thegearedges.com
          </div>
        </a>

        {/* <Link href={"/FAQ"} className="no-decoration">
          <div className="footer-option">FAQ</div>
        </Link> */}
        <div className="footer-option-heading no-cursor">&ensp;</div>
        <div className="footer-option-heading no-cursor">&ensp;</div>
      </div>

      <div className="lower-footer-tape">
        © 2025. The Gear edges. All Rights Reserved/SolitaireInfosys.
      </div>
    </div>
  );
}
