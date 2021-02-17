import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import ContactPage from '../contact/contact'
import HomePage from '../home/home'
import AboutPage from '../about/about'
import ProjectsPage from '../projects/projects'
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

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
    slug: "contact",
    className: "",
    children: <Contact />
  }
];
