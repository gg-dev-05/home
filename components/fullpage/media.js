import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import ContactPage from '../contact/contact'
import HomePage from '../home/home'
import ProjectsPage from '../projects/projects'
import Section from "../section/section";
import AboutPage from '../about/index'
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
    <Section wrapper={false} backgroundColor="#0f0e17">
      <AboutPage />
    </Section>
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
