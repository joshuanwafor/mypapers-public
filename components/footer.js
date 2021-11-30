import React from "react"
import Link from "next/link"

export default function Footer() {
    return <div>
        <div class="my-5">
            <div class="py-5">
                <div class="container">
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6 my-2">
                            <div class="h-100 p-5 text-white bg-dark rounded-3">
                                <h2>Sell projects</h2>
                                <p>Completing a final year project has never been easy, earn some money as you
                                    help others with finished  project resources.</p>
                               <Link href=""><a class="btn btn-outline-light" type="button">Get started</a></Link>
                            </div>
                        </div>
                        <div class="col-md-6 my-2">
                            <div class="h-100 p-5 bg-light border rounded-3">
                                <h2>Find project resources</h2>
                                <p>Find project resources your could use as a guide to complete your research work.
                                    We got you covered all round... </p>
                                <Link href="/projects"><a class="btn btn-outline-secondary" type="button">Explore</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="bg-dark text-muted py-3">
            <div class="container">
                <footer class="row">
                    <div class="col-12 text-center">
                        <h6 class="fw-bold text-light">MyPapers.Shop</h6>
                        <p>Copyright © 2021 mypapers.shop All rights reserved</p>

                        <div class="dropdown">
                            <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Legal Info
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="/cookies-policies">Cookies policy</a></li>
                                <li><a class="dropdown-item" href="/terms-and-conditions">Terms and Conditions</a></li>
                                <li><a class="dropdown-item" href="/fair-use-policy">Fair use</a></li>
                            </ul>
                        </div>

                        <div class="my-3 text-muted">
                            <a><i class="bi bi-facebook fs-3"></i></a>
                            <a><i class="bi bi-whatsapp fs-3 mx-2"></i></a>
                            <a><i class="bi bi-twitter fs-3"></i></a>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    </div>
}