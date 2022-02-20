import React from "react";
import axios from "axios";

import { usePaystackPayment } from "react-paystack";
import { downloadProjectResource, makeProjectPayment } from "../../lib/actions";

export function ProjectDownload({ project }) {
  let [email, setEmail] = React.useState("pending");
  let [processingStatus, setProcessingStatus] = React.useState("pending");

  function downloadProject() {
    if (email == "" || email == undefined) {
      alert("Please type in a valid email");
      return;
    }

    downloadProjectResource(email, project.id).then((url) => {
      window.open(url, "_top");
    });
  }

  const NOTE = (
    <div className="alert alert-info mt-2" role="alert">
      Your download will work after payment for{" "}
      <span className="fw-bold">{project.title}</span> has been comfirmed...
    </div>
  );

  console.log(project);
  return (
    <div>
      <button
        className="btn btn-primary btn-lg mr-2"
        data-bs-toggle="modal"
        data-bs-target="#downloadModal"
      >
        <i className="bi bi-download"></i>
        Download DocX
      </button>
      <div
        className="modal fade"
        id="downloadModal"
        aria-labelledby="downloadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="downloadModalLabel">
                Download {project.title}
              </h5>
            </div>
            <div className="modal-body">
              <div className="form-group mb-4">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <small id="emailHelp" className="form-text text-muted">
                  Enter email address used to purchase project
                </small>
              </div>
              <button
                className="btn btn-primary btn-lg w-100"
                type="submit"
                data-toggle="modal"
                data-target="#payModal"
                onClick={downloadProject}
              >
                <i className="bi bi-credit-card"></i>
                Proceed
              </button>
              {NOTE}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
