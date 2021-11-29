import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import UserContext from '../lib/userContext';
import Router from 'next/router';

import Cookies from 'js-cookie';
import { useContext } from 'react';

function MyNavbar() {

  function onLogout() {
    Cookies.set('jwt', '');
    setUserContext(undefined);
    Router.push('/login');
  }

  return <div>
    <nav class="navbar fixed-top navbar-expand-lg shadow shadow-sm navbar-light bg-light "
      style={{ borderTop: "3px solid rgb(255, 137, 78)" }}>
      <div class="container-fluid px-md-5">
        <a class="navbar-brand" href="/">MyPapers</a>
        <span class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link href="/projects"><a class="nav-link active" aria-current="page">Projects</a>
              </Link>
            </li>
            <li class="nav-item">
            <Link href="/departments">
              <a class="nav-link">Departments</a>
              </Link>
            </li>
         
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
             
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Get help</a></li>
                <li><a class="dropdown-item" href="#">Find support</a></li>
                <li><a class="dropdown-item" href="#">Recommend</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Provide help</a></li>
                <li><a class="dropdown-item" href="#">Provide support</a></li>
              </ul>
            </li>
            <li class="nav-item">
            <Link href="/about">
              <a class="nav-link">About</a>
              </Link>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div class="d-flex lead align-items-center">
              <i class="bi bi-facebook mx-2 ml-0"></i>
              <i class="bi bi-whatsapp mx-2"></i>
              <i class="bi bi-envelope mx-2"></i>
              <a class="btn d-block btn-danger mx-2 mr-0" type="submit" href="https://app.mypapers.shop">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>;
}

export default MyNavbar;