import MyNavbar from "../components/MyNavbar";
import Footer from "../components/footer";
import Link from "next/link";
import TaxonomyCard from "../components/taxonomy-card";
import { getDepartments } from "../lib/actions";
import { SearchComponent } from "../components/search-component";
import { SignupCard } from "../components/organisms/signup-card";
export default function Index({ departments }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div className="bg-light">
        <div className="container">
          <div className="border-bottom d-flex align-items-center">
            <div className="bg-ligh" style={{ flex: 1 }}>
              <div className="px-0 py-5 mb-0 text-center">
                <h1 className="fw-bold mb-3">Find project resources</h1>
                <p>Type in query to streamline search results</p>
                <div style={{ position: "relative" }}>
                  <SearchComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <SignupCard/>

      <div className="container my-5">
        <h3 className="fw-bold">Search project by departments</h3>
        <div className="row">
          {departments
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((v) => {
              return (
                <div className="col-12 col-md-6 my-2">
                  <Link href={"/projects?department_id=" + v.id}>
                    <a className="text-decoration-none text-body">
                      <TaxonomyCard {...v} />
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <Footer  departments={departments} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getDepartments();

  return {
    props: {
      departments: data,
    },
  };
}
