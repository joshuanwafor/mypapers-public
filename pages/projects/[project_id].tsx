import MyNavbar from "../../components/header";
import Footer from "../../components/footer";
import Editor from "rich-markdown-editor";
import { getDepartments, getProject, getProjects } from "../../lib/actions";
import { ProjectPay } from "../../components/organisms/project-pay";
import { ProjectDownload } from "../../components/organisms/project-download";

export default function ProjectPage({ project, departments }) {
  return (
    <div>
      <MyNavbar />
      <div className="container my-5">
        <div className="row  border rounded">
          <div className="col-12 col-md-12 p-2 p-md-5">
            <h1 className="">{project.title}</h1>
            <p className="text-muted">2020, Research work</p>

            <p>{project.description}</p>

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
              </span>
              <br />
              <div className="mt-2">
                <span>
                  <i className="bi bi-layers"></i>
                  {project.chapters_count ?? 0} Chapters
                </span>
              </div>
            </div>

            <p className="my-3">
              <span className="fw-bold">Publication Date</span>: 2020
              <br />
              <span className="fw-bold">Publication Name</span>: Research work
            </p>

            <div className="my-3">
              <div className="text-muted">Purchase Fee</div>
              <h3>₦{project.price ?? 0}</h3>
            </div>

            <div className="d-flex">
              <ProjectDownload project={project} />
              <div style={{ width: 12 }}></div>
              <ProjectPay project={project} />
            </div>
          </div>

          <div className="col-12">
            <hr />
          </div>
          <div className="col-12 col-md-12 p-2 p-md-5">
            <h3>Descripion</h3>
            <article>
              <Editor defaultValue={project.body} readOnly />
            </article>
          </div>
        </div>
      </div>
      <Footer departments={departments} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let {
    params: { project_id },
  } = context;
  const departments = await getDepartments();
  let project = await getProject(project_id);
  console.log(project);
  return {
    props: {
      // props for your component
      project: project,
      departments: departments,
    },
  };
}
