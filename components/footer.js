import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    <div>
      <div class="my-5">
        <div class="py-5">
          <div class="container">
            <div class="row align-items-md-stretch">
              <div class="col-md-6 my-2">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Sell projects</h2>
                  <p className="text-mute">
                    Completing a final year project has never been easy, earn
                    some money as you help others with finished project
                    resources.
                  </p>
                  <a
                    class="btn btn-outline-light"
                    href="https://wa.me/2349017283616?text= Hello Joshua, i'll love to register on mypapers.shop as a partner... "
                    type="button"
                  >
                    Get started
                  </a>
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="h-100 p-5 bg-light border rounded-3">
                  <h2>Find project resources</h2>
                  <p>
                    Find project resources your could use as a guide to complete
                    your research work. We got you covered all round...{" "}
                  </p>
                  <Link href="/projects">
                    <a class="btn btn-outline-secondary" type="button">
                      Explore
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        class=" text-white footer section pt-6 pt-md-8 pt-lg-10 pb-3 overflow-hidden bg-dark py-5"
        style={{}}
      >
        <div class="pattern pattern-soft top"></div>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4 mb-4 mb-lg-0">
              <a
                class="footer-brand mr-lg-5 d-flex"
                href="@@path_common/index.html"
              >
                <img
                  src="@@path/assets/img/brand/light.svg"
                  height="35"
                  class="mr-3"
                  alt="Footer logo"
                />
              </a>
              <p class="my-4 text-light">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                quae voluptate deserunt saepe iure numquam error unde dicta
                asperiores, in nam quisquam tempore provident consequatur atque
                qui et illo cum?{" "}
              </p>
            </div>
            <div class="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
              <h6>Subjects</h6>
              {props.departments.map((v) => {
                return (
                  <div class="">
                    <a
                      target="_blank"
                      href={"https://www.creative-tim.com/" + v.id}
                      className="text-muted text-decoration-none"
                    >
                      {v.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <h6>Subscribe</h6>
              <p class="font-small">
                The latest Impact news, articles, and resources, sent straight
                to your inbox every month.
              </p>
              <form action="#">
                <div class="form-row">
                  <div class="col-8">
                    <input
                      type="email"
                      class="form-control mb-2"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </div>
                  <div class="col-4">
                    <button type="submit" class="btn btn-secondary btn-block">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <small class="mt-2 form-text">
                We’ll never share your details. See our{" "}
                <a href="#" class="font-weight-bold text-underline">
                  Privacy Policy
                </a>
              </small>
            </div>
          </div>
          <hr class="my-4 my-lg-5" />
          <div class="row">
            <div class="col pb-4 mb-md-0">
              <div class="d-flex text-center justify-content-center align-items-center">
                <p class="font-weight-normal mb-0">
                  © <a href="#">KusuConsult</a>{" "}
                  <span class="current-year"></span>. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
