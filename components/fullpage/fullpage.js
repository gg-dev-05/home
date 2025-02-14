import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "../startup/startup";

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
  const isFirstLoad = useRef(true);
  let animation = 'scaleOutAnimation';
  if (fullpage.navigation.slug.substring(0, 8) === "projects" || fullpage.navigation.slug === "")
    animation = 'openAnimation'

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={275}
      animation={animation}
      className="awesome-slider"
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      media={media}
    />
  );
});
