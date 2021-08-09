import React from "react"
import { Link } from "gatsby"
import { header } from "../styles/nav.module.css"
import { Helmet } from "react-helmet"
export default function Nav() {
  return (
    <nav className={header}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>

      <header>
        {" "}
        <h2>Jay West</h2>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              My Work
            </Link>
          </li>
          <li>
            {" "}
            <Link to="./" activeClassName="active">
              My Skill
            </Link>
          </li>
          <li>
            {" "}
            <Link to="./" activeClassName="active">
              Hire Me
            </Link>
          </li>
        </ul>
      </header>

      <aside>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </aside>
    </nav>
  )
}
