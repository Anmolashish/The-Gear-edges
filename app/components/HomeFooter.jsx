import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="footer-logo">
        <img
          src="/Images/gearlogo-removebg-preview.png"
          alt="Logo of Steel mans Gears"
        />
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
        <div className="footer-option-heading no-cursor">contact</div>
        <Link href={"/contact"} className="no-decoration">
          <div className="footer-option">Contact</div>
        </Link>
        <Link href={"/"} className="no-decoration">
          <div className="footer-option">Review</div>
        </Link>
        <Link href={"/"} className="no-decoration">
          <div className="footer-option">Infrastructure</div>
        </Link>
      </div>

      <div className="footer-options-section-3">
        <div className="footer-option-heading">Contact Info</div>

        <div className="footer-option">
          <span>Email: </span>sales@thegearedges.com
        </div>

        <div className="footer-option transparent no-cursor">
          <span>Email: </span>sales@thegearedges.com
        </div>
        <div className="footer-option transparent no-cursor">
          <span>Email: </span>sales@thegearedges.com
        </div>
      </div>

      <div className="lower-footer-tape">
        © 2025. The Gear edges. All Rights Reserved.
      </div>
    </div>
  );
}
