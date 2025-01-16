import Link from "next/link";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import FeedbackTwoSlider from "../src/components/FeedbackTwoSlider";
import PageBanner from "../src/components/PageBanner";
import ExperienceTeam from "../src/components/slider/ExperienceTeam";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"about us"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-35 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title mb-20">About Company</span>
                  <h2>Organic &amp; Helathy Foods Provider Farming</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo enim voluptatem
                </p>
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>Fresh Fruites and Vegetable</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>Dairy Products</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>Meat and Poultry</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <h4>Bakery Products</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-social-care" />
                      </div>
                      <h4>Spices and Condiments</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div className="about-video wow fadeInRight delay-0-2s">
                <img
                  className="image"
                  src="assets/images/about/about-page.jpg"
                  alt="About"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
                <img
                  className="bg-shape"
                  src="assets/images/about/about-bg-shape.png"
                  alt="Shape"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/about-page.png"
          alt="Shape"
          className="shape"
        />
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="number">01</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature1.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Vegetables</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="number">02</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature2.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Organic Fruits</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="number">03</span>
                  <div className="image">
                    <img
                      src="assets/images/features/feature3.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Agriculture &amp; Farming</h4>
                  <p>
                    Quis autem vel eum reprehenderit quiea voluptate velit esse
                    quam niyate smolestiae consequatur nulla
                  </p>
                </div>
                <Link href="/service-details">
                  <a className="read-more">
                    Read More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Gallery Area Start */}
      {/* <section className="gallery-area">
        <PhotoGallery noHeader />
      </section> */}
      {/* Gallery Area End */}
      {/* Team Area Start */}
      {/* <section className="team-area pt-50 rpt-20 pb-95 rpb-65">
        <div className="container">
          <ExperienceTeam />
        </div>
      </section> */}
      {/* Team Area End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                {/* <img
                  className="image"
                  src="assets/baladi-imgs/2. About Us Page/Company Building/1.webp"
                  alt="About"
                  style={{ width: "100%", borderRadius: "20px" }}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Message</span>
                  <h2>Esteemed Chairman</h2>
                </div>
                <p style={{ textAlign: "justify", fontSize: "18px" }}>
                  As the distinguished Chairman of Al Baladi Group, His
                  Excellency Mohamed Abdulla Al Attiyah embodies visionary
                  leadership, guiding the organization with unparalleled wisdom
                  and foresight. His unwavering commitment to excellence and
                  integrity has not only shaped the strategic direction of the
                  group but also cemented its reputation as a leader across
                  diverse sectors. With a profound understanding of both global
                  and local markets, he has championed innovation,
                  sustainability, and ethical business practices, fostering an
                  enduring legacy of success. His Excellency’s leadership
                  continues to inspire a culture of excellence, driving Al
                  Baladi Group to new heights and ensuring its continued growth
                  and impact for generations to come.
                </p>
              </div>
            </div>
          </div>
          <hr style={{ paddingBlock: "2rem" }}></hr>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                {/* <img
                  className="image"
                  src="assets/baladi-imgs/2. About Us Page/Company Building/2.webp"
                  alt="About"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "30px",
                    maxHeight: "600px",
                  }}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Message</span>
                  <h2>Group Chief Executive Officer </h2>
                </div>
                <p style={{ textAlign: "justify", fontSize: "18px" }}>
                  Hany Al Sayyadi serves as the esteemed Group Chief Executive
                  Officer of Al Baladi Group, exemplifying unparalleled
                  leadership and strategic acumen. Renowned for his visionary
                  approach and dedication to fostering innovation, he has been
                  instrumental in shaping the group’s trajectory of sustained
                  growth and success. With a profound understanding of global
                  markets and a commitment to operational excellence, Mr. Al
                  Sayyadi has skilfully navigated the complexities of today’s
                  business environment, ensuring the group’s continued
                  prominence across diverse sectors. His leadership is marked by
                  a steadfast focus on driving transformative change, elevating
                  standards, and securing the long-term prosperity of Al Baladi
                  Group.
                </p>
              </div>
            </div>
          </div>
          <hr style={{ paddingBlock: "2rem" }}></hr>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-two-image not-rounded wow fadeInUp delay-0-2s">
                {/* <img
                  className="image"
                  alt="About"
                  src="assets/baladi-imgs/2. About Us Page/Company Building/3.webp"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "30px",
                    maxHeight: "600px",
                  }}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content pt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-20">Message</span>
                  <h2>Chief Operating Officer </h2>
                </div>
                <p style={{ textAlign: "justify", fontSize: "18px" }}>
                  As the esteemed Chief Operating Officer of Al Baladi Group,
                  Mr. Sunil Kumar brings a wealth of operational expertise and
                  strategic insight to the organization. With a distinguished
                  career spanning decades, he is renowned for his exceptional
                  ability to optimize processes, drive operational excellence,
                  and lead large-scale initiatives with precision. His visionary
                  approach to enhancing operational efficiencies and his
                  commitment to continuous improvement have been pivotal in the
                  group’s sustained growth and success. Mr. Sunil Kumar’s
                  leadership is characterized by a deep focus on innovation,
                  teamwork, and delivering results that align with the group’s
                  mission of achieving excellence in every facet of its
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <img src="assets/images/shapes/about-shape1.png" alt="Shape" />
          <img src="assets/images/shapes/about-shape2.png" alt="Shape" />
        </div>
      </section>
      {/* About Section End */}
      {/* Feedback Section Start */}
      <section className="feedback-section pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <hr />

          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Target Market</span> */}
            <h2>Mission</h2>
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
              To deliver the finest selection of fresh produce and quality
              products at affordable prices, ensuring an unparalleled shopping
              experience that promotes health, sustainability, and value for our
              customers and the community.
            </p>
          </div>
          <hr />
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Target Market</span> */}
            <h2>Vision</h2>
            <p style={{ textAlign: "justify", fontSize: "18px" }}>
              To be the premier destination in Qatar for the freshest produce,
              spices, and dairy, offering exceptional quality with
              affordability, and enriching lives through convenience while
              promoting a healthy and sustainable lifestyle.
            </p>
          </div>
          <hr />
        </div>
        {/* <FeedbackTwoSlider /> */}
      </section>
      {/* Feedback Section End */}
      {/* Client Logo Section Start */}
      {/* <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div> */}
    </Layout>
  );
};
export default About;
