import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortfolioGridIsotope = ({ title, items, tabs }) => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        isotope.current = new Isotope(".portfolio-active", {
          itemSelector: ".item",
          percentPosition: true,
          masonry: {
            columnWidth: ".item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      if (filterKey === "*") {
        isotope.current.arrange({ filter: "*" });
      } else {
        isotope.current.arrange({ filter: `.${filterKey}` });
      }
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  return (
    <section className="portfolio-fluid-area rel z-1 py-130 rpy-100">
      <div className="container">
        <div className="row align-items-end pb-40">
          <div className="col-lg-6 wow fadeInUp delay-0-2s">
            <div className="section-title mb-20">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-lg-6 text-lg-right wow fadeInUp delay-0-4s">
            <ul className="portfolio-filter mb-20">
              {tabs.map((tab) => (
                <li
                  key={tab.filterKey}
                  data-filter={
                    tab.filterKey === "*" ? "*" : `.${tab.filterKey}`
                  }
                  className={`c-pointer ${activeBtn(tab.filterKey)}`}
                  onClick={handleFilterKeyChange(tab.filterKey)}
                >
                  {tab.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row portfolio-active">
          {items.map((item, i) => (
            <div
              key={i}
              className={`col-lg-4 col-sm-6 item ${item.categories}`}
            >
              <div
                className={`gallery-style-two wow fadeInUp ${item.delayClass}`}
              >
                <img src={item.imageSrc} alt={item.imageAlt} />
                <div className="gallery-over">
                  <div className="content">
                    <span className="category">{item.category}</span>
                    <h4>
                      <Link href={item.linkHref}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGridIsotope;
