import MyNavbar from '../components/MyNavbar';
import Footer from "../components/footer";
import Link from "next/link";
import ProjectCard from "../components/project-card";
import "../style.css";
import { useRouter } from 'next/router';
import { getDepartments, getProjects } from '../lib/actions';
import React from 'react';
import { SearchComponent } from '../components/search-component';

export default function Index({ departments, projects }) {
    let { query: { department_id } } = useRouter();

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
                                <div style={{ position: 'relative' }}>
                                    <SearchComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark">
                <div className="d-flex flex-column flex-md-row p-2 justify-content-center align-items-center">
                    <div className="text-light  text-center lead mx-md-3">Over <span className="fw-bold">200</span> resources publised. Create publisher account.</div>
                    <a className="btn btn-danger mt-2 mt-md-0" href="https://wa.me/2349017283616?text= Hello Joshua, i'll love to register on mypapers.shop as a partner... ">Create Account</a>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-8  my-3">
                        <div className="border rounded">
                            <div className="d-flex align-items-center justify-content-between border-bottom p-3 bg-light">
                                <div>
                                    Projects
                                </div>
                                <div>
                                </div>
                            </div>
                            {projects.map(v => {
                                return <div style={{ borderBottom: "1px solid rgba(200,200,200,.5)" }}>
                                    <ProjectCard {...v} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-3">
                        <div className="border rounded">
                            <div className="p-3">
                                Top categories
                            </div>
                            <div className="border-top">

                                {departments.map(v => {
                                    return <div className="col-12 col-md-12 my-2 mb-0 border-bottom">
                                        <Link href={"/projects?department_id=" + v.id}>
                                            <a className="p-3 py-2">
                                                {v.name}
                                            </a>
                                        </Link>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example " className="my-5">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer />
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
            projects: projects
        }
    }
}