
import algoliasearch from 'algoliasearch';
import Link from 'next/link';
import React from "react";



const applicationID = "VEDUWHENK3";
const API = "357a1ee93613b22d9bd9bb0fa3c48fb9"

const searchClient = algoliasearch(applicationID, API);
const project_index = searchClient.initIndex('projects');

export function SearchComponent() {

    let [searchterm, updateTerm] = React.useState("")
    let [result, setResult] = React.useState<any[]>([]);
    return <div className="w-100">
        <div className="input-group input-group-lg overflow-hidden" style={{ position: "relative" }}>
            <input type="text" className="form-control form-control-lg shadow-none outline-none"
                placeholder="Search Reposiory"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(ev) => {
                    updateTerm(ev.target.value)
                    project_index.search(searchterm).then(v => {
                        setResult(v.hits)
                    });
                }} />
            <button className="btn btn-secondary disabled" type="button" id="button-addon2"><i
                className="bi bi-binoculars-fill"></i></button>
        </div>
        {result.length == 0 ? <div></div> : <div style={{ position: "absolute", width: "100%", top: "calc(100% + 4px)" }} className="p-2 bg-light rounded">
            Results count -  {result.length}
            <div>
                {result.map(v => {
                    console.log(v);
                    return <div style={{}}>
                        <Link href={"projects/" + v._id}>
                            <a>
                                {v.title}
                            </a>
                        </Link>
                    </div>
                })}
            </div>
        </div>}
    </div>
}