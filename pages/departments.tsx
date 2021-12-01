import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer"
import Link from "next/link"
import TaxonomyCard from "../components/taxonomy-card"
import "../style.css"
import { getDepartments } from '../lib/actions';

export default function Index({ departments }) {
  return (
    <>
      <MyNavbar></MyNavbar>

      <div style={{}}>
        <div className="container-fluid">
          <div className="border-bottom d-flex align-items-center">
            <div className="bg-light" style={{ flex: 1 }}>
              <div className="px-0 py-5 mb-0 text-center">
                <h1 className="fw-bold mb-3">Project Topics by departments</h1>
                <p>Browse Contents, Place Order and Download Your Project </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="d-flex flex-column flex-md-row p-2 justify-content-center align-items-center">
          <div className="text-light  text-center lead mx-md-3">Over <span className="fw-bold">200</span> resources publised. Create publisher account.</div>
          <button className="btn btn-danger mt-2 mt-md-0">Create Account</button>
        </div>
      </div>


      <div className="container my-5">
        <h3>Search project by departments</h3>
        <div className="row">
          {departments.sort((a, b) => a.name.localeCompare(b.name)).map(v => {
            console.log(v)
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
  // Get external data from the file system, API, DB, etc.
  const data = await getDepartments()

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      departments: data
    }
  }
}