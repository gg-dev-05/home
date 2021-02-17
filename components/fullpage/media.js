import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import ContactPage from '../contact/contact'
import ProjectsPage from '../projects/projects'
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#0f0e17">
      <Content
        main={
          <Lettering
            title="Welcome"
            text={[
              "Hi, Welcome to my portfolio. I am Garvit Galgat, a Full - Stack Developer.",
            ]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/about");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const Contact = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={true} backgroundColor="#0f0e17">
      <ContactPage />
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

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "about",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#0f0e17">
          <Content
            main={
              <Lettering
                title="ABOUT ME"
                text={[
                  "orem Ipsum is simply dummy text of the printin ustry's standard dummy text ever sine a type"
                ]}
              />
            }
            action={<Mouse />}
          />
        </Section>
        <Section backgroundColor="#0f0e17">
          <Lettering
            title="PAGE-SECTION"
            text={["This is a continued page section."]}
          />
        </Section>
      </Page>
    )
  },
  {
    slug: "projects",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <Projects />
  },
  {
    slug: "contact",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <Contact />
  }
];
