import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
      return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = () => (
  <footer className="main-footer bg-green text-white pt-10">
    <div className="container">
      {/* <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div> */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <p>
              From our farms to your front door, enjoy the vitality of
              farm-fresh deliveries with Baladi Fresh.
            </p>
            <li>
              <div className="social-style-one">
                <a
                  target="_blank"
                  href="https://www.facebook.com.com/baladifreshqa"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://x.com/baladifreshqa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="https://www.snapchat.com/add/baladifreshqa"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-snapchat" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/baladifreshqa"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </li>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget one-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>

              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/services">Elements</Link>
              </li> */}
              {/* <li>
                <Link href="/portfolio-grid">
                  <a>Our Projects</a>
                </Link>
              </li> */}
              <li>
                <Link href="/shop-grid">
                  <a>Shop</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/farmers">
                  <a>Meet Farmers</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/service-details">
                  <a>Technology</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li> */}
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              {/* <li>
                <Link href="/service-details">
                  <a>Vegetables</a>
                </Link>
              </li> */}
              {/* <li>
                <Link href="/contact">Setting &amp; Privacy</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contact Us</h4>

            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                head office - Markhiya Doha, Qatar
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:71399855">71399855</a>
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:baladifreshqatar@gmail.com">
                  baladifreshqatar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © 2025 Baladi Express. All Rights Reserved.</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">Setting &amp; Privacy</Link>
          </li>
          <li>
            <Link href="/faqs">
              <a>Faqs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">Payments</Link>
          </li>
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
const Footer3 = () => (
  <footer className="main-footer footer-black text-white">
    <div className="container-fluid">
      <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
        <div className="happy-clients counter-item">
          <i className="flaticon-quote" />
          <b className="count-text" data-speed={3000} data-stop={56384}>
            <Counter end={56384} />
          </b>
          <span>Happy Clients</span>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-xl-5">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link href="/">
                    {/* <a>
                      <img
                        src="assets/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                    </a> */}
                  </Link>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  epsa quae abillo inventore veritatis quasi architecto
                </p>
                <div className="social-style-two pt-10">
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-grid">
                      <a>Our Projects</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/farmers">
                      <a>Meet Farmers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      <a>Latest News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Vegetables</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">Recent News</h4>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget1.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Universal Principles User Experience
                        </Link>
                      </h6>
                      <span className="name">By Westfield</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget2.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Roll Out New Featuc Without Hurting
                        </Link>
                      </h6>
                      <span className="name">By Mendonca</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">Contact Us</h4>

                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    head office - Markhiya Doha, Qatar
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="mailto:baladifreshqatar@gmail.com">
                      baladifreshqatar@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="calto:71399855">71399855</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget gallery-widget">
                <h4 className="footer-title">Gallery</h4>
                <ul>
                  <li>
                    <a href="assets/images/widgets/gallery1.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery1.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery2.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery2.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery3.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery3.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery4.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery4.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery5.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery5.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery6.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery6.jpg"
                      alt="Gallery"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area-wrap">
      <div className="container-fluid">
        <div className="copyright-area pt-25 pb-10">
          <p>Copyright © 2024 Baladi Express. All Rights Reserved.</p>
          <ul className="footer-menu">
            <li>
              <Link href="/contact">
                <a>Setting &amp; Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a>Faqs</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Payments</a>
              </Link>
            </li>
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up" />
          </button>
        </div>
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
