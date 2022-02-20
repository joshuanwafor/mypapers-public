import axios from "axios";

let host = "http://localhost:8000";
let production = "";
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

export async function makeProjectPayment(
  email: string,
  project: string
): Promise<string> {
  try {
    console.log("before make payment");

    let res = await axios.post(
      process.env.NEXT_PUBLIC_HOST + "/rest/make-payment",
      {
        email: email,
        project_id: project,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function downloadProjectResource(
  email: string,
  project: string
): Promise<string> {
  try {
    console.log("before download");
    let res = await axios.post(
      process.env.NEXT_PUBLIC_HOST + "/rest/make-download",
      {
        email: email,
        project_id: project,
      }
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
