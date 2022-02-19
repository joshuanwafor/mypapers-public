
let host = "http://localhost:8000";
let production = ""
export async function getDepartments() {
  let res = await fetch(process.env.HOST + "/rest/taxonomies");
  return await res.json();
}

export async function getProjects() {
  let res = await fetch(process.env.HOST + "/project-list");
  return await res.json();
}

export async function getProject(projectid: string) {
  let res = await fetch(process.env.HOST + "/projects/" + projectid);
  return await res.json();
}

