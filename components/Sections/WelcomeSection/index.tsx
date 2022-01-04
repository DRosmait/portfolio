import styled from "styled-components";
import { motion } from "framer-motion";

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
  return (
    <FullHeightSection>
      {screens.map(
        (screen, idx) =>
          step === idx && (
            <DisappearingText
              key={idx}
              lines={screen}
              onAnimationComplete={() => {
                // increment step for starting new animation
                setStep((value) => value + 1);
              }}
            />
          )
      )}

      {step === 3 && <h1>Dima</h1>}
    </FullHeightSection>
  );
}
