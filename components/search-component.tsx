import algoliasearch from "algoliasearch";
import Link from "next/link";
import React from "react";

const applicationID = "VEDUWHENK3";
const API = "357a1ee93613b22d9bd9bb0fa3c48fb9";

const searchClient = algoliasearch(applicationID, API);
const project_index = searchClient.initIndex("projects");

export function SearchComponent() {
  let [searchterm, updateTerm] = React.useState("");
  let [result, setResult] = React.useState<any[]>([]);
  return (
    <div className="w-100">
      <form action="/results">
        <div
          className="input-group input-group-lg overflow-hidden"
          style={{ position: "relative" }}
        >
          <input
            type="text"
            className="form-control form-control-lg shadow-none outline-none"
            placeholder="Search Repository"
            name="query"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <button
            className="btn btn-secondary"
            type="submit"
            id="button-addon2"
          >
            <i className="bi bi-binoculars-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
