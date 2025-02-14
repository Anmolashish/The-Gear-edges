import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="footer-logo">
        <img src="/Images/logo-1.png" alt="Logo of Steel mans Gears" />
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
        <div className="footer-option-heading">hello</div>
        <Link href={"/contact"} className="no-decoration">
          <div className="footer-option">Contact</div>
        </Link>
        <Link href={"/"} className="no-decoration">
          <div className="footer-option">Review</div>
        </Link>
        <Link href={"/"} className="no-decoration">
          <div className="footer-option">Blogs</div>
        </Link>
      </div>

      <div className="footer-options-section-4">
        <div className="footer-option-heading">Other products</div>
        <div className="footer-option">Steel mans Brouches pvt lt</div>
        <div className="footer-option">Steel mans Cutting tools</div>
        <div className="footer-option">hello there</div>
      </div>

      <div className="footer-options-section-3">
        <div className="footer-option-heading">Contact Info</div>
        <div className="footer-option">
          <span>Call-us: </span>+91 - 175 - 7961320
        </div>
        <div className="footer-option">
          <span>Email: </span>info@steelmans.com
        </div>
        <div className="footer-option">
          <span>Regd. Office: </span>183 Ajit Nagar,
          <br /> Patiala 147001 Punjab (INDIA)
        </div>
      </div>

      <div className="lower-footer-tape">
        2008 © Copyright www.steelmansgears.com. All rights reserved.
      </div>
    </div>
  );
}
