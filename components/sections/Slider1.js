"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
};

import Link from "next/link";

export default function Slider1() {
  return (
    <>
      <section className="slider-area pt-20 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9">
              <div
                className="tp-slider-area p-relative"
                style={{ height: "440px" }}
              >
                <div
                  className="swiper-container slider-active"
                  style={{ height: "440px" }}
                >
                  <Swiper {...swiperOptions} style={{ height: "100%" }}>
                    <SwiperSlide>
                      <div
                        className="tp-slide-item"
                        style={{ height: "440px" }}
                      >
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accessories
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Up To
                            <i>
                              40% Off
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>
                            latest Creations
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            className="w-100"
                            src="/assets/img/slider/banner-1.jpg"
                            alt=""
                            style={{ height: "440px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="tp-slide-item"
                        style={{ height: "440px" }}
                      >
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accessories
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Up To{" "}
                            <i>
                              35% Off{" "}
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>{" "}
                            latest Creations
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            className="w-100"
                            src="/assets/img/slider/banner-2.jpg"
                            alt=""
                            style={{ height: "440px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="tp-slide-item"
                        style={{ height: "440px" }}
                      >
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accessories
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Up To{" "}
                            <i>
                              45% Off{" "}
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>{" "}
                            latest Creations
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Shop Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img
                            className="w-100"
                            src="/assets/img/slider/banner-3.jpg"
                            alt=""
                            style={{ height: "440px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="slider-pagination" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "440px" }}
              >
                <div className="col-lg-12 col-md-6">
                  <div className="tpslider-banner tp-slider-sm-banner">
                    <Link href="/shop-details">
                      <div className="tpslider-banner__img">
                        <img
                          className="w-100"
                          src="/assets/img/slider/banner-slider-01.jpg"
                          alt=""
                          style={{ height: "205px", objectFit: "cover" }}
                        />
                        <div className="tpslider-banner__content">
                          <span className="tpslider-banner__sub-title">
                            Hand made
                          </span>
                          <h4 className="tpslider-banner__title">
                            New Modern Stylist <br /> Crafts
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="tpslider-banner">
                    <Link href="/shop-details">
                      <div className="tpslider-banner__img">
                        <img
                          className="w-100"
                          src="/assets/img/slider/banner-slider-02.jpg"
                          alt=""
                          style={{ height: "205px", objectFit: "cover" }}
                        />
                        <div className="tpslider-banner__content">
                          <span className="tpslider-banner__sub-title">
                            Popular
                          </span>
                          <h4 className="tpslider-banner__title">
                            Energy with our <br /> newest collection
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
