import Link from "next/link"
export default function ProjectCard(project) {
    return <a href={"projects/" + project.id} class="card block border-0 text-decoration-none text-body">
        <div class="card-body ">
            <h5 class="card-title text-body">
                {project.title}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted my-2">
                {project.description}
            </h6>
            <div class="text-muted d-flex">
                <span>
                    <i class="bi bi-tags"></i>
                    Tags
                </span>
                <span class="mx-2">
                    <i class="bi bi-file-earmark"></i>
                    {project.pages_count}
                </span>
                <span>
                    <i class="bi bi-cash-coin"></i>
                    Yes
                </span>
            </div>
        </div>
    </a>;
}