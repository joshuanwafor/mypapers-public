import Footer from "../components/footer";
import MyNavbar from "../components/header";
import { getDepartments } from "../lib/actions";

export default function ({departments}) {
  return (
    <div>
      <MyNavbar />
      <div>
        <p>Privacy Policy for http://eduprojecttopics.com//</p>
        <p>
          At http://eduprojecttopics.com//, the privacy of our visitors is of
          extreme importance to us. This Privacy &nbsp;Policy document outlines
          the types of personal information that is received and collected by
          http://eduprojecttopics.com// and how it is used. The information we
          collect and receive is used to provide our services, to improve our
          services and performance, and to offer effective advertising, which
          helps us keep most of our services free. We never sell your personal
          information to third parties.
        </p>
        <p>Log Files</p>
        <p>
          Like many other Web sites, http://eduprojecttopics.com// makes use of
          log files. The information inside the log files includes internet
          protocol ( IP ) addresses, type of browser, Internet Service Provider
          ( ISP, such as AOL and Globacom Nigeria ), date/time stamp,
          referring/exit pages, and number of clicks to analyze trends,
          administer the site, track user&rsquo;s movement around the site, and
          gather demographic information. IP addresses, and other such
          information are not linked to any information that is personally
          identifiable.
        </p>
        <p>Cookies and Web Beacons</p>
        <p>
          http://eduprojecttopics.com//uses cookies to store information about
          visitors preferences, record user-specific information on which pages
          the user access or visit, customize Web page content based on visitors
          browser type or other information that the visitor sends via their
          browser.
        </p>
        <p>DoubleClick DART cookies</p>
        <p>
          We also may use DART cookies for ad serving through Google&rsquo;s
          DoubleClick, which places a cookie on your computer when you are
          browsing the web and visit a site using DoubleClick advertising
          (including some Google AdSense advertisements).
        </p>
        <p>
          This cookie is used to serve ads specific to you and your interests
          (&rdquo;interest based targeting&rdquo;). The ads served will be
          targeted based on your previous browsing history (For example, if you
          have been viewing sites about Samsung batteries, you may see Samsung
          batteries advertisements when viewing a non-related site, such as on a
          site about medicine). DART uses &ldquo;non personally identifiable
          information&rdquo;. It does NOT track personal information about you,
          such as your name, email address, physical address, telephone number,
          social security numbers, bank account numbers or credit card numbers.
          You can opt-out of this ad serving on all sites using this advertising
          by visiting http://www.doubleclick.com/privacy/dart_adserving.aspx
        </p>
        <p>
          You can choose to disable or selectively turn off our cookies or
          third-party cookies in your browser settings, or by managing
          preferences in programs such as Norton Internet Security. However,
          this can affect how you are able to interact with our site as well as
          other websites. This could include the inability to login to services
          or programs, such as logging into forums or accounts.
        </p>
        <p>
          Deleting cookies does not mean you are permanently opted out of any
          advertising program. Unless you have settings that disallow cookies,
          the next time you visit a site running the advertisements, a new
          cookie will be added.
        </p>
        <p>
          If you require any more information or have any questions about our
          privacy policy, please feel free to e-mail us: edustoreng@gmail.com.
        </p>
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
