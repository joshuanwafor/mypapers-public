
export default function DepartmentCard(props) {
    return (<div class="card block text-decoration-none text-dark h-100 shadow text-decoration-none" style={{ borderBottom: " 4px solid rgb(11, 139, 199)" }} >
            <div class="card-body h-100">
                <div class="">
                    <span class="pb-4">
                        <i style={{ color: "rgb(10, 94, 10);" }} class="bi bi-collection lead"></i>
                    </span>
                </div>
                <div style={{ flex: 1 }}>
                    <h5 class="card-title ">
                        {props.name}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted fs-small">
                        {props.type}
                    </h6>
                    <p class="card-text">Find research materials on  {props.name}
                    </p>
                </div>
            </div>
        </div>)
}