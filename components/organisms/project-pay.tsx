import React from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";

export function ProjectPay({ project }) {
  let [email, setEmail] = React.useState("pending");
  let [processingStatus, setProcessingStatus] = React.useState("pending");

  function makePayment() {
    if (email == "" || email == undefined) {
      alert("Please type in a valid email");
      return;
    }
    axios
      .post(process.env.HOST + "/rest/make-payment", {
        email: email,
        project_id: project.id,
      })
      .then((res) => {
        console.log(res.data);

        window.open(res.data, "_top");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const NOTE = (
    <div className="alert alert-info mt-2" role="alert">
      After successful payment, we'll email a copy of{" "}
      <span className="fw-bold">{project.title}</span> to the email you provided
    </div>
  );

  console.log(project);
  return (
    <div>
      <button
        className="btn btn-danger btn-lg"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-credit-card"></i>
        Pay
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Pay for {project.title}
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
                  An email address you manage{" "}
                </small>
              </div>
              <button
                className="btn btn-primary btn-lg w-100"
                type="submit"
                data-toggle="modal"
                data-target="#payModal"
                onClick={makePayment}
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
