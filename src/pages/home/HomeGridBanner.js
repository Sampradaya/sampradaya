import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/section-title/SectionTitle";
import SEO from "../../components/seo";


const HomeGridBanner = () => {
  return (
    <Fragment>
      <SectionTitle titleText="DAILY DEALS!" positionClass="text-center" />
        {/* grid banner */}
        <div className="product-area hm6-section-padding pb-80">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-1.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4 price-4-center">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-3.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-1">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-4.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 text-center position-3">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-2.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 product-content-center position-2">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-5.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 product-content-center position-2">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-6.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 product-content-center position-2">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-7.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 product-content-center position-2">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-wrap-4 mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/product/hm6-pro-8.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="product-content-4 product-content-center position-2">
                    <h4>
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        T- Shirt And <br />
                        Jeans
                      </Link>
                    </h4>
                    <div className="price-4">
                      <span>$ 60.00</span>
                      <span className="old">$ 80.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
     
    </Fragment>
  );
};

export default HomeGridBanner;
