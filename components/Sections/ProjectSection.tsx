import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Section from "../common/Section";
import SectionInner from "../common/SectionInner";
import Headline from "../common/Headline";
import SMILogo from "../icons/SMILogo";
import NiveaLogo from "../icons/NiveaLogo";
import HansaplastLogo from "../icons/HansaplastLogo";
import EucerinLogo from "../icons/EucerinLogo";
import { device } from "../../styles/breakpoints";

interface Props {
  showNow: boolean;
}

// Elements
const LogoContainer = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-flow: row nowrap;
  }
`;

const LogoItem = styled(motion.a)`
  cursor: pointer;
  display: block;

  @media ${device.mobileS} {
    margin-bottom: calc(1rem + 2vh);
    width: 40%;
  }

  @media ${device.mobileL} {
    margin-bottom: 0;
    width: 20%;
  }
`;

// Variants
const headlineVariants = {
  hidden: {
    opacity: 0,
    y: "-200%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
    },
  },
};

const logoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const logoItemVariants = {
  hidden: {
    opacity: 0,
    y: "200%",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
  },
};

const ProjectSection = ({ showNow }: Props) => {
  const [wasShown, setWasShown] = useState(false);

  useEffect(() => {
    if (!wasShown && showNow) setWasShown(true);
  }, [showNow, wasShown, setWasShown]);

  return (
    <Section>
      {wasShown && (
        <SectionInner initial="hidden" animate="visible">
          <Headline variants={headlineVariants}>Projects I worked on:</Headline>

          <LogoContainer variants={logoContainerVariants}>
            <LogoItem
              href="https://www.youtube.com/watch?v=Hh1jmyQBV9g&ab_channel=TraversyMedia"
              rel="noreferrer"
              target="_blank"
              variants={logoItemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <SMILogo />
            </LogoItem>
            <LogoItem
              href="https://www.nivea.de/"
              rel="noreferrer"
              target="_blank"
              variants={logoItemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <NiveaLogo />
            </LogoItem>
            <LogoItem
              href="https://www.hansaplast.de/"
              rel="noreferrer"
              target="_blank"
              variants={logoItemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <HansaplastLogo />
            </LogoItem>
            <LogoItem
              href="https://www.eucerin.de/"
              rel="noreferrer"
              target="_blank"
              variants={logoItemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <EucerinLogo />
            </LogoItem>
          </LogoContainer>
        </SectionInner>
      )}
    </Section>
  );
};

export default ProjectSection;
