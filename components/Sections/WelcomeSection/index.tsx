import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import DisappearingText from "../../Text/DisappearingText";
import { device } from "../../../styles/breakpoints";

interface Props {}

const FullHeightSection = styled(motion.section)`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  @media ${device.mobileS} {
    padding: 0 1.25rem;
  }

  @media ${device.tablet} {
    padding: 0 2rem;
  }
`;

const sectionVariants = {
  0: {
    backgroundColor: "rgb(0, 209, 181)",
  },
  1: {
    backgroundColor: "rgb(252, 87, 255)",
  },
  2: {
    backgroundColor: "rgb(87, 199, 255)",
  },
  3: {
    backgroundColor: "rgb(255, 116, 61)",
  },
};

const screens = [
  ["Programming", "is", "awesome"],
  ["Hello and wellcome", "My name is Dima", "I'm FE developer"],
  ["...just scroll down"],
];

export default function WelcomeSection({}: Props) {
  const [animationState, toggleAnimationState] = useCycle("start", "end");
  const [screenToShow, setScreenToShow] = useState(0);

  useEffect(() => toggleAnimationState(1), []);
  useEffect(() => console.log(animationState), [animationState]);

  return (
    <FullHeightSection
      variants={sectionVariants}
      animate={screenToShow.toString()}
      initial={false}
      transition={{ duration: 3 }}
    >
      {screens.map(
        (screen, idx) =>
          screenToShow === idx && (
            <DisappearingText
              key={idx}
              lines={screen}
              animate={animationState}
              onAnimationComplete={() => {
                toggleAnimationState(0);
                requestAnimationFrame(() => toggleAnimationState(1));
                setScreenToShow((value) => value + 1);
              }}
            />
          )
      )}
    </FullHeightSection>
  );
}
