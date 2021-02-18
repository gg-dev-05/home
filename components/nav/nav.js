import React, { useEffect } from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  let { slug } = fullpage.navigation;
  if (slug.substring(0, 8) == "projects")
    slug = "projects"

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <div>
            <h1>
              <span>GARVIT</span>
              <span>GALGAT</span>
            </h1>

          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            HOME
          </Link>
          <Link
            className={slug === "about" ? "selected" : null}
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className={slug === "projects" ? "selected" : null}
            href="/projects"
          >
            PROJECTS
          </Link>
          <Link
            className={slug === "contact" ? "selected" : null}
            href="/contact"
          >
            CONTACT
          </Link>
        </nav>
      </div>
      <hr style={{ border: '0.1px solid #ff8906' }} />

    </header>
  );
});

export default Nav;
