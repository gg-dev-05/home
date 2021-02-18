import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import ContactPage from '../contact/contact'
import HomePage from '../home/home'
import TechstackPage from '../techstack/techstack'
import AboutPage from '../about/about'
import ProjectsPage from '../projects/projects'
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

import Test1Page from '../projects/test1/test1'

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0f0e17">
      <HomePage />
    </Section>
  );
});

export const About = withNavigationContext(({ fullpage }) => {
  return (
    <Page>
      <Section wrapper={false} backgroundColor="#0f0e17">
        <AboutPage />
      </Section>
      <Section backgroundColor="#0f0e17">
        <TechstackPage />
      </Section>
    </Page>
  );
});

export const Projects = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0f0e17">
      <ProjectsPage />
    </Section>

  );
});

export const Contact = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0f0e17">
      <ContactPage />
    </Section>

  );
});

export const Test1 = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0f0e17">
      <Test1Page />
    </Section>

  );
});


export const media = [
  {
    slug: "",
    className: "",
    children: <Home />
  },
  {
    slug: "about",
    className: "",
    children: <About />
  },
  {
    slug: "projects",
    className: "",
    children: <Projects />
  },
  {
    slug: "projects/test1",
    className: "",
    children: <Test1 />
  },
  {
    slug: "projects/test2",
    className: "",
    children: <Test1 />
  },
  {
    slug: "projects/test3",
    className: "",
    children: <Test1 />
  },
  {
    slug: "contact",
    className: "",
    children: <Contact />
  }
];
