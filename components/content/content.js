import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import "./content.scss";

const options = [
  {
    label: "Cube Animation",
    value: "cubeAnimation"
  },
  {
    label: "Fall Animation",
    value: "fallAnimation"
  },
  {
    label: "Fold Out Animation",
    value: "foldOutAnimation"
  },
  {
    label: "Open Animation",
    value: "openAnimation"
  },
  {
    label: "Scale Out Animation",
    value: "scaleOutAnimation"
  }
];

const Content = withNavigationContext(({ fullpage, main, action }) => {
  return (
    <div className="content">
      <div className="content__main">{main}</div>
    </div>
  );
});

export default Content;
