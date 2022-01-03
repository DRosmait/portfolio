import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import DisappearingText from "../../Text/DisappearingText";
import { device } from "../../../styles/breakpoints";

interface Props {
  step: number;
  setStep(arg: number | ((value: number) => number)): void;
}

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

const screens = [
  ["Programming", "is", "awesome"],
  ["Hello and wellcome", "My name is Dima", "I'm FE developer"],
  ["...just scroll down"],
];

export default function WelcomeSection({ step, setStep }: Props) {
  const [animationState, toggleAnimationState] = useCycle("start", "end");

  useEffect(() => toggleAnimationState(1), []);
  useEffect(() => console.log(animationState), [animationState]);

  return (
    <FullHeightSection>
      {screens.map(
        (screen, idx) =>
          step === idx && (
            <DisappearingText
              key={idx}
              lines={screen}
              animate={animationState}
              onAnimationComplete={() => {
                // restart animation cycle
                toggleAnimationState(0);
                requestAnimationFrame(() => toggleAnimationState(1));
                // increment step for starting new animation
                setStep((value) => {
                  console.log(value + 1);
                  return value + 1;
                });
              }}
            />
          )
      )}
    </FullHeightSection>
  );
}
