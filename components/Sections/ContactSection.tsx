import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, Transition } from "framer-motion";

import Section from "../common/Section";
import SectionInner from "../common/SectionInner";
import Headline from "../common/Headline";
import WavesBackground from "../WavesBackground";
import LinkedInIcon from "../icons/LinkedInIcon";
import XingIcon from "../icons/XingIcon";
import GithubIcon from "../icons/GithubIcon";
import LetterIcon from "../icons/LetterIcon";
import { device } from "../../styles/breakpoints";

interface Props {
  showNow: boolean;
}

const Background = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-bottom: 10vh;

  & > * {
    max-width: 12rem;
  }

  @media ${device.mobileS} {
    & > * {
      width: 17vw;
    }
  }

  @media ${device.tablet} {
    & > * {
      width: 13vw;
    }
  }

  @media ${device.desktopS} {
    & > * {
      width: 10vw;
    }
  }
`;

const IconLink = styled(motion.a)`
  cursor: pointer;
`;

// Variants
const getHeadlineVariants = (transition: Partial<Transition> = {}) => {
  return {
    hidden: {
      opacity: 0,
      y: "-200%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        ...transition,
      },
    },
  };
};

const getIconContainerVariants = (transition: Partial<Transition> = {}) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
        ...transition,
      },
    },
  };
};

const iconVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  hover: {
    rotate: 10,
  },
};

export default function ContactSection({ showNow }: Props) {
  const [wasShown, setWasShown] = useState(false);

  useEffect(() => {
    if (!wasShown && showNow) setWasShown(true);
  }, [showNow, wasShown, setWasShown]);

  return (
    <Section>
      <Background>
        <WavesBackground />
      </Background>

      {wasShown && (
        <SectionInner>
          <Headline
            variants={getHeadlineVariants()}
            initial="hidden"
            animate="visible"
          >
            Find me there:
          </Headline>

          <IconContainer
            variants={getIconContainerVariants()}
            initial="hidden"
            animate="visible"
          >
            <IconLink
              href="https://www.linkedin.com/in/dima-rosmait-5b4205199/"
              rel="noreferrer"
              target="_blank"
              variants={iconVariants}
              whileHover={{
                rotate: 10,
              }}
            >
              <LinkedInIcon />
            </IconLink>

            <IconLink
              href="https://www.xing.com/profile/Dima_Rosmait/cv"
              rel="noreferrer"
              target="_blank"
              variants={iconVariants}
              whileHover={{
                rotate: 10,
              }}
            >
              <XingIcon />
            </IconLink>

            <IconLink
              href="https://github.com/DRosmait"
              rel="noreferrer"
              target="_blank"
              variants={iconVariants}
              whileHover={{
                rotate: 10,
              }}
            >
              <GithubIcon />
            </IconLink>
          </IconContainer>

          <Headline
            variants={getHeadlineVariants({ delay: 1.5 })}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            ... or write me an email:
          </Headline>
          <IconContainer
            variants={getIconContainerVariants({ delay: 1.8 })}
            initial="hidden"
            animate="visible"
          >
            <IconLink
              href="mailto:dimarosmait@gmail.com"
              variants={iconVariants}
              whileHover={{
                rotate: 10,
              }}
            >
              <LetterIcon />
            </IconLink>
          </IconContainer>
        </SectionInner>
      )}
    </Section>
  );
}
