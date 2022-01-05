import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import FlexWrapper from "../common/FlexWrapper";
import ResetIcon from "../icons/ResetIcon";
import BritainFlag from "../icons/BritainFlag";
import GermanFlag from "../icons/GermanFlag";
import DisappearingText from "../DisappearingText";
import { device } from "../../styles/breakpoints";

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

  @media ${device.desktopM} {
    padding: 0 2rem;
  }
`;

const Button = styled(motion.button)`
  align-items: center;
  border: 3px solid white;
  border-radius: 5vh;
  cursor: pointer;
  font-size: calc(1rem + 1vw);
  font-weight: 700;
  display: flex;
  margin-bottom: 10vh;
  padding: calc(1rem + 0.5vw) calc(1rem + 2vw);
  text-align: center;
`;

const CVTitle = styled.h1`
  font-size: calc(1rem + 2vw);
  margin-bottom: 5vh;
  text-align: center;
`;

const FlagContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const FlagLink = styled(motion.a)`
  cursor: pointer;
  max-width: 12rem;
  width: 30vw;

  &:first-of-type {
    margin-right: 3vw;
  }
`;

// Variants
const flexWrapperVariants = {
  exit: {
    opacity: 0,
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: "-50vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 40,
    },
  },
  hover: {
    scale: 1.15,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 250,
    },
  },
};

const svgVariants = {
  hover: {
    rotate: 720,
    originY: "50%",
    originX: "50%",
    scale: 1.2,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const cvContainerVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
};

const flagButtonVariants = {
  hover: {
    scale: 0.9,
    transition: {
      type: "spring",
    },
  },
};

const screens = [
  ["Programming", "is", "awesome"],
  ["Hello and wellcome", "My name is Dima", "I'm FE developer"],
  ["...just scroll down"],
];

export default function WelcomeSection({ step, setStep }: Props) {
  return (
    <FullHeightSection>
      <AnimatePresence exitBeforeEnter>
        {screens.map(
          (screen, idx) =>
            step === idx && (
              <DisappearingText
                key={idx}
                lines={screen}
                onAnimationComplete={() => setStep((value) => value + 1)}
              />
            )
        )}

        {step >= 3 && (
          <FlexWrapper key="cv" variants={flexWrapperVariants} exit="exit">
            <Button
              onClick={() => setStep(0)}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="hover"
            >
              <ResetIcon variants={svgVariants} />
              Restart greeting
            </Button>

            <motion.div
              variants={cvContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <CVTitle>Take a look at my CV:</CVTitle>

              <FlagContainer>
                <FlagLink
                  href="/cv/cv_dima_rosmait.pdf"
                  target="_blank"
                  variants={flagButtonVariants}
                  whileHover="hover"
                  whileTap="hover"
                >
                  <BritainFlag />
                </FlagLink>

                <FlagLink
                  href="/cv/cv_dima_rosmait.pdf"
                  target="_blank"
                  variants={flagButtonVariants}
                  whileHover="hover"
                  whileTap="hover"
                >
                  <GermanFlag />
                </FlagLink>
              </FlagContainer>
            </motion.div>
          </FlexWrapper>
        )}
      </AnimatePresence>
    </FullHeightSection>
  );
}
