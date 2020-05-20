import Link from 'next/link'
import Layout from '../components/layout.js';
import styles from './about.module.css';

// export default function About() {
//   return (
//     <Layout>
//
//     </Layout>
//   )
// }

export default function About() {
return (
  <Layout>
    <h1>About</h1>

    <div className="intro">
      <h2>What We Do</h2>
      <p>The Harvard Computer Society is a student-run organization at Harvard College that has been a "driving force" in the development and deployment of computers at Harvard since well before the fall of the Soviet Union (or the very least, we've met weekly to talk about computers and technology and eat pizza since at least 1983). We do whatever we're interested in (and, by proxy, whatever you're interested in, if you join us) but we have a number of ongoing and currently active projects that tend to consume our time. They're listed below: if any of them strike your fancy, come visit us! Want to start your own project? Pitch it to us and if we like what we hear, we would be happy to fund you! To apply click {' '}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScAbm5yZn-aBaHtRvAnov-Z5fYGNNTfr5slvuO0mUw31-fhig/viewform">here</a>.
      </p>
    </div>

    <div className="projects">
      <h2>Projects</h2>
      <h3>Systems</h3>
      <p>HCS runs the web server {' '}
      <a href="/">www.hcs.harvard.edu</a>
      , and the mailing list server {' '}
      <a href="lists.hcs.harvard.edu">lists.hcs.harvard.edu</a>
      . This means that most student groups on campus use our Linux machines to host their web sites and administer their email lists. More info on Systems can be found on the {' '}
      <a href="/about/systems">Systems page</a>
      . Thanks to a recent grant from FAS IT, we've just spent over $30,000 completely rebuilding our systems from the ground up, which means we're now in a position to do lots of cool projects.
      </p>

      <h3>Education</h3>
      <p> HCS runs 4 programming bootcamps every semester, designed to teach new members a variety of tools and programming languages. These bootcamps provide an opportunity for students new to CS to learn some practical, hands-on tools that they can go on to use in their own projects or apps. Successful completion of 3 out of 4 of these bootcamps makes you an HCS member!
      </p>

      <h3>Account Services</h3>
      <p> All those student groups have accounts on our servers, and the Account Services team is the group of people that makes their user experience as pleasant as possible. Like helping people? Want a fun, easy way to put off doing your homework? Account Services might very well be your cup of tea.
      </p>

      <h3>Speakers</h3>
      <p> HCS often brings big-name speakers to campus. In 1993, we had Steve Ballmer for a visit. In the more recent past, we've had Steve Wozniak, Stephen Wolfram, Paul Graham, and Cory Doctorow. Most recently, we had Larry Wall, inventor of Perl. In general, we try to contact well-known people in the computer and technology sectors and bring them on campus to interact with students.
      </p>

      <h3>Advocacy for Good Computing at Harvard</h3>
      <p> Harvard is a great place with a great computer network, but its policies need to be mindful of students' fair access to computing resources while protecting their privacy and security. We keep an ongoing dialogue with the people in power on campus and we try and talk through policy changes with them to encourage transparency and student-friendly rules and regulations. We've also had an HCS member on the faculty oversight committee for information technology for many years now.
      </p>

      <h3>Other Projects</h3>
      <p> We work closely with a lot of organizations at Harvard to promote the visible use of advanced technology. Some of our more important collaborative projects {' '}
      <a href="/about/collaborations">receive credit here</a>
      . Other ideas? Just stop by. We're always looking for new project ideas.
      </p>
    </div>

    <div className="join">
    <h2>Like What You See?</h2>
    <p> Join us! You can join our weekly {' '}
    <a href="https://lists.hcs.harvard.edu/mailman/listinfo/hcs-announce">Announce mailing list</a>
    . Really want to get the whole vibe? Join our higher-traffic {' '}
    <a href="https://lists.hcs.harvard.edu/mailman/listinfo/hcs-discuss">discussion list</a>
    .</p>

    </div>

  </Layout>
);
}