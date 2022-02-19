import Link from "next/link";

function MyNavbar() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg shadow shadow-sm navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="/logo.jpg" width={90} />
          </a>
          <span
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </span>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end col-12">
              <li class="nav-item">
                <Link href="/projects">
                  <a class="nav-link active" aria-current="page">
                    Projects
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/departments">
                  <a class="nav-link">Departments</a>
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Get help
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Find support
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Recommend
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Provide help
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Provide support
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link href="/about">
                  <a class="nav-link">About</a>
                </Link>
              </li>
            </ul>
            <div class="d-flex align-items-center"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MyNavbar;
