import Footer from "../components/footer";
import MyNavbar from "../components/header";

export default function ({ departments }) {
  return (
    <div>
      <MyNavbar />
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <p>
                      The Edustore.ng <strong>Terms &amp; Conditions</strong> is
                      an agreement between you and the Team at Edustore.ng that
                      allows you to use Edustore.ng services as long as you
                      follow the{" "}
                      <strong>
                        <em>Terms &amp; Conditions.</em>
                      </strong>
                    </p>
                    <p>
                      <strong>To Use Our Services, You:</strong>
                    </p>
                    <ul>
                      <li>
                        Must be at least 13 years old (with some limited
                        exceptions)
                      </li>
                      <li>
                        May need to register with us to access and use some of
                        our services and websites
                      </li>
                      <li>
                        Must not initiate or participate in any activities on
                        our services that are illegal, harmful, or interfere
                        with anyone&rsquo;s use of our services, including the
                        sending of e-mail or instant messaging spam
                      </li>
                    </ul>
                    <p>
                      <strong>If You Post Content On a Service, You:</strong>
                    </p>
                    <ul>
                      <li>
                        May post content that you create or have been given
                        permission to post by the owner, is legal, and
                        doesn&rsquo;t violate the Terms &amp; Conditions
                      </li>
                      <li>
                        Are responsible for content that you post to our
                        services and assume all risks of posting personal
                        information online
                      </li>
                      <li>
                        Continue to own the content but grant Edustore.ng a
                        license to use and distribute your content
                      </li>
                    </ul>
                    <p>
                      <strong>
                        The Content On&nbsp;Edustore.ng Services Is:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Owned by us or our suppliers and may only be used as we
                        specify
                      </li>
                      <li>
                        For general information, discussion, and entertainment
                        purposes only and we make no representations or
                        guarantees about the truth, accuracy, or quality of any
                        content
                      </li>
                    </ul>
                    <p>
                      <strong>
                        If You Subscribe to One Of Our Paid Services, You:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Must provide us with accurate billing information, which
                        we will keep on file
                      </li>
                      <li>Agree to pay all charges incurred on your account</li>
                      <li>
                        Acknowledge that surcharges may apply to some services,
                        all charges are nonrefundable, and we may change any of
                        our paid services at any time
                      </li>
                      <li>
                        Are responsible for all fees necessary to access our
                        services
                      </li>
                      <li>
                        May cancel a paid service by calling, or mailing a
                        letter to us
                      </li>
                    </ul>
                    <p>
                      <strong>You Also Agree That We:</strong>
                    </p>
                    <ul>
                      <li>
                        Can change or end our services at any time without
                        notice
                      </li>
                      <li>
                        Can place advertising, which supports our services,
                        within applications, on web pages, on mobile devices,
                        and more
                      </li>
                    </ul>
                    <p>
                      <strong>DISCLAIMER:&nbsp;</strong>All the
                      contents/materials on this website are for studies and
                      research purposes only and should be used as guidelines.
                      On project materials, For no reason should you copy word
                      for word. We [Edustore.NG] will not be liable for any who
                      copied the material. Also, all product names, logos,
                      photos, and brands are the property of their respective
                      owners. Some of the products mentioned on this site may
                      include an affiliate link and provide Edustore.ng with
                      monetary earnings.
                    </p>
                    <p>
                      If it happens that you see your work posted here, and you
                      want it removed/credited, just send us a mail together
                      with the link of the work, at edustoreng@gmail.com.
                    </p>
                    <p>
                      We will reply to &amp; honor every request. Please notice
                      it may take up to 24 or 48 hours to process your request.
                      Do not hesitate to voice any concerns by contacting us via
                      our E-mail: edustoreng@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer departments={departments} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getDepartments();

  return {
    props: {
      departments: data,
    },
  };
}

function getDepartments() {
  throw new Error("Function not implemented.");
}
