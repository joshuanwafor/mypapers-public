import MyNavbar from "../components/MyNavbar";
import Footer from "../components/footer";
import Link from "next/link";
import TaxonomyCard from "../components/taxonomy-card";
import "../style.css";
export default function Index({ departments }) {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div id="cover">
        <div className="container-fluid py-5 px-md-5">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ minHeight: "30vh" }}
          >
            <div className="col-md-6">
              <h1 className="fw-bold text-light">About</h1>
              <p className="md-lead text-light">
                Find project resouces for your project work
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <article>
          <h3>About MyPapers.Shop</h3>
          <p>
            {" "}
            MyPapers.shop is number one online academic resources place in
            Nigeria where students come together to share their knowledge,
            browse, download and upload project materials.{" "}
          </p>
          <p>
            Academic Project Research has been made pretty easy and fun. The
            stress of moving from one school library to another all in the name
            of searching for project materials is now a thing of the past. You
            can now get access to thousands of research materials and articles
            at the comfort of your home or even while you are on the go. You
            also get the opportunity to download each material instantly. You
            don't have to go to bank, you can order for any topic online and
            download the material at the conform of your home, office or on the
            go.
          </p>

          <div className="alert alert-danger" role="alert">
            Disclaimer: This PDF Material Content is Developed by the copyright
            owner to Serve as a RESEARCH GUIDE for Students to Conduct Academic
            Research. You are allowed to use the original PDF Research Material
            Guide you will receive in the following ways:
          </div>

          <h3>What MyPapers.shop offers </h3>
          <p>
            On MyPapers.shop, you can download project topics and materials from
            an extensive list of top departments like Accounting, Marketing,
            Business Administration, Computer Science, Coperative Economics,
            Microbiology, Chemical Engineering, Electrical Engineering, Banking
            and Finance, Library Science, Education, etc.
          </p>

          <ul>
            <li>
              As a source for additional understanding of the project topic.
            </li>
            <li>
              As a source for ideas for you own academic research work (if
              properly referenced).
            </li>
            <li>
              For PROPER paraphrasing ( see your school definition of plagiarism
              and acceptable paraphrase).
            </li>
            <li>Direct citing ( if referenced properly).</li>
          </ul>

          <p>
            Thank you so much for your respect for the authors copyright. Do you
            need help? Talk to us right now: (+234) 08060082010, 08107932631
            (Call/WhatsApp). Email: edustoreng@gmail.com.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
