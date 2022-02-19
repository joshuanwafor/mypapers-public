export default function DepartmentCard(props) {
  return (
    <div
      class="border block text-decoration-none text-dark text-decoration-none"
      style={{}}
    >
      <div class="d-flex p-2">
        <div class="">
          <span class="">
            <i style={{ fontSize: 14 }} class="bi bi-collection lead"></i>
          </span>
        </div>
        <div style={{ flex: 1, paddingLeft: 8 }}>
          <div className="d-flex justify-content-between">
            <div class="">{props.name}</div>
            <span class="badge bg-secondary">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
