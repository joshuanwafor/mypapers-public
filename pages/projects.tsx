import MyNavbar from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import ProjectCard from "../components/project-card";
import "../style.css";
import { useRouter } from "next/router";
import { getDepartments, getProjects } from "../lib/actions";
import React from "react";
import { SearchComponent } from "../components/search-component";
import { SignupCard } from "../components/organisms/signup-card";

export default function Index({ departments, projects }) {
  let {
    query: { department_id },
  } = useRouter();

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

      <SignupCard />

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-8  my-3">
            <div className="border rounded">
              <div className="d-flex align-items-center justify-content-between border-bottom p-3 bg-light">
                <div className="">Projects</div>
                <div></div>
              </div>
              {projects
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((v) => {
                  return (
                    <div
                      style={{ borderBottom: "1px solid rgba(200,200,200,.5)" }}
                    >
                      <ProjectCard {...v} />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-12 col-md-4 my-3">
            <div className="border rounded">
              <div className="p-3 bg-light">Top categories</div>
              <div className="border-top">
                {departments
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((v) => {
                    return (
                      <div className="col-12 col-md-12 my-2 mb-0 border-bottom">
                        <Link href={"/projects?department_id=" + v.id}>
                          <a className="p-3 py-2 text-decoration-none">
                            {v.name}
                          </a>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer departments={departments} />
    </>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await getDepartments();
  const projects = await getProjects();

  return {
    props: {
      departments: data,
      projects: projects,
    },
  };
}
