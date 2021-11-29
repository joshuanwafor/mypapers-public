import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer"
import Link from "next/link"
import TaxonomyCard from "../components/taxonomy-card"
import "../style.css"
import {getProjects,getDepartments} from "../lib/actions"
export default function Index({ departments }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div id="cover">
        <div className="container-fluid py-5 px-md-5">
          <div className="row align-items-center justify-content-center text-center" style={{ minHeight: "40vh" }}>
            <div className="col-md-6">
              <h1 className="fw-bold text-light">About</h1>
              <p className="md-lead text-light">Find project resouces for your project work</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
