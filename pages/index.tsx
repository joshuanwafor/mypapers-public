import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer"
import Link from "next/link"
import TaxonomyCard from "../components/taxonomy-card"
import "../style.css"
import { getDepartments } from "../lib/actions"
import { SearchComponent } from '../components/search-component';
export default function Index({ departments }) {
  return (
    <>
      <OverlayWelcom />
      <MyNavbar></MyNavbar>
      <div id="cover">
        <div className="container-fluid py-5 px-md-5">
          <div className="row align-items-center justify-content-center text-center" style={{ minHeight: "60vh" }}>
            <div className="col-md-6">
              <h1 className="fw-bold text-light">Project resources for everyone.</h1>
              <p className="md-lead text-light">Find project resources for your project work</p>

              <SearchComponent />

            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <div className="d-flex flex-column flex-md-row p-4 justify-content-center align-items-center">
          <div className="text-light  text-center lead mx-md-3">Over <span className="fw-bold">200</span> resources publised. Create publisher account.</div>
          <a className="btn btn-danger mt-2 mt-md-0 btn-lg" href="https://app.mypapers.shop/profile">Create Account</a>
        </div>
      </div>

      <div className="container my-5">
        <h3>Search project by departments</h3>
        <div className="row">
          {departments.sort((a, b) => a.name.localeCompare(b.name)).map(v => {
            return <div className="col-12 col-md-4 my-2">
              <Link href={"/projects?department_id=" + v.id}>
                <a className="text-decoration-none text-body">
                  <TaxonomyCard {...v} />
                </a>
              </Link>
            </div>
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {

  const data = await getDepartments();

  return {
    props: {
      departments: data
    }
  }
}


export function OverlayWelcom() {
  return <div style={{ position: "fixed", width: "100%", zIndex: 100000000000000000,background:"rgba(200,200,200,.9)" }}>

    <div className="container p-2" style={{height:"100vh"}}>
      <div className="row justify-content-center align-items-center " style={{ }}>
        <div style={{ borderRadius: 10, overflow: "hidden" }} className="cool-10 col-md-6 p-0 text-center bg-light shadow">
          <div className="mb-2" style={{ paddingTop: '40%' }} id="welcomecover">

          </div>
          <div className="p-2">
            <div className="h1 fw-bold">
              We're building a market place for "academic" research works
            </div>
            <p className="lead">Create and Settup an account to published project[s] you'd love to exchange for some cash...</p>
            <a className="btn btn-lg btn-danger" href="https://app.mypapers.shop/profile">Create Publisher Account</a>

           <p>
           <small className="my-2 muted">Resources would be open for sale starting from  <b>Jan.01.2022</b></small>
           </p>
          </div>
        </div>
      </div>
    </div>

  </div>
}