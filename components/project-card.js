import Link from "next/link";
export default function ProjectCard(project) {
  return (
    <a
      href={"projects/" + project.id}
      class="card block border-0 text-decoration-none text-body"
    >
      <div class="card-body ">
        <h5 class=" text-body">{project.title}</h5>
        <h6 class=" mb-2 text-muted my-2">
          {project.description.slice(0, 255)}...
        </h6>
        <div className="d-flex justify-content-between">
          <div class="text-muted d-flex align-items-center">
            <span class="mx-2">
              <i class="bi bi-file-earmark"></i>
              {project.pages_count}
            </span>
            <span>
              <i class="bi bi-cash-coin"></i>
              Yes
            </span>
          </div>
          <button className="btn btn-sm btn-primary">View</button>
        </div>
      </div>
    </a>
  );
}
