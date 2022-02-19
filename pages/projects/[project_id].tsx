import MyNavbar from '../../components/MyNavbar';
import Footer from "../../components/footer"
import Editor from "rich-markdown-editor"
import { getProject } from '../../lib/actions';
import Link from "next/link"

export default function ProjectPage({ project }) {
    return <div>
        <MyNavbar />
        <div className="container my-5">
            <div className="row  border rounded">
                <div className="col-12 col-md-12 p-2 p-md-5">
                    <h1 className="">
                        {project.title}
                    </h1>
                    <p className="text-muted">
                        2020, Research work
                    </p>

                    <p>
                        {project.description}
                    </p>

                    <div className="my-3">
                        <span>
                            <i className="bi bi-tags"></i>
                            Tags
                        </span>
                        <span className="mx-2">
                            <i className="bi bi-file-earmark"></i>
                            {project.pages_count ?? 0}
                        </span>
                        <span className="mx-2">
                            <i className="bi bi-cash-coin"></i>
                            Yes
                        </span>
                        <span>
                            <i className="bi bi-check-all"></i>
                            Abstract
                        </span><br />
                        <div className="mt-2"><span><i className="bi bi-layers"></i>
                            {project.chapters_count ?? 0} {" "}Chapters
                        </span></div>
                    </div>

                    <p className="my-3">
                        <span className="fw-bold">Publication Date</span>: 2020
                        <br />
                        <span className="fw-bold">Publication Name</span>: Research work
                    </p>

                    <div className="my-3">
                        <div className="text-muted">Purchase Fee</div>
                        <h3>₦{project.price ?? 0}
                        </h3>
                    </div>

                    <div className="d-flex">
                        <button className="btn btn-primary btn-lg mr-2">
                            <i className="bi bi-download"></i>
                            Download DocX</button>
                        <Pay project={project} />
                    </div>
                </div>

                <div className="col-12">
                    <hr />
                </div>
                <div className="col-12 col-md-12 p-2 p-md-5">
                    <h3>
                        Descripion
                    </h3>
                    <article>
                        < Editor defaultValue={project.body} readOnly />
                    </article>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}


function Pay({ project }) {
    return <div>

        <button className="btn btn-danger btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-credit-card"></i>
            Pay</button>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    </div>
                    <div className="modal-body">
                        <form className="my-2" action="/rest/make-payment" method="post">
                            <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email"
                                    name="email" />
                                <input type="text" hidden className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email"
                                    name="project_id" value="<%- project._id %>" />
                                <small id="emailHelp" className="form-text text-muted">An email address you manage </small>
                            </div>
                            <button className="btn btn-primary btn-lg w-100 disabled" type="submit" data-toggle="modal"
                                data-target="#payModal">
                                <i className="bi bi-credit-card"></i>
                                Proceed
                            </button>
                        </form>

                        <div className="alert alert-info mt-2" role="alert">
                            After successful payment, we'll email a copy of <span className="fw-bold">
                                {project.title}
                            </span> to the email you provided
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <div className="d-flex">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <div style={{ width: 12, height: 12, background: "red" }}></div>
                            <button type="button" className="btn btn-primary ">Save changes</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
}


export async function getServerSideProps(context) {
    let { params: { project_id } } = context;
    let project = await getProject(project_id);
    console.log(project)
    return {
        props: {
            // props for your component
            project: project
        }
    }
}
