import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Section from "../common/Section";
import SectionInner from "../common/SectionInner";
import Headline from "../common/Headline";
import { device } from "../../styles/breakpoints";

interface Props {
  showNow: boolean;
}

const TechSection = styled(motion.dl)`
  margin-bottom: calc(0.5rem + 0.3vh);

  @media ${device.tablet} {
    margin-bottom: calc(1rem + 1vh);
  }
`;

const TechTitle = styled(motion.dt)`
  font-size: 1rem;
  font-weight: 100;

  @media ${device.tablet} {
    font-size: calc(1rem + 0.3vw);
  }
`;

const TechList = styled(motion.dd)``;

const TechItem = styled(motion.span)`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: calc(0.3rem + 0.8vw);

  &:last-of-type {
    margin-right: 0%;
  }

  @media ${device.tablet} {
    font-size: calc(1.2rem + 0.5vw);
  }
`;

const techVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const techItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const techs = [
  {
    title: "Programming languages:",
    list: ["TypeScript", "JavaScript", "ES2017"],
  },
  {
    title: "Front-End Frameworks:",
    list: ["VueJS", "VueX", "Vue Router", "ReactJS", "Redux", "React Router"],
  },
  {
    title: "Back-End:",
    list: ["NodeJS", "Express", "MongoDB", "Mongoose"],
  },
  {
    title: "Testing:",
    list: ["Cypress", "Jest"],
  },
  {
    title: "Bundlers und Compilers:",
    list: ["Webpack", "Grunt", "Babel"],
  },
  {
    title: "Programmierparadigmen und Prinzipien:",
    list: ["OOP", "Funktionale und Reaktive Programmierungen"],
  },
  {
    title: "Andere:",
    list: ["REST und GraphQL API", "HTML", "CSS", "SCRUM", "Agile"],
  },
];

const SkillsSection = ({ showNow }: Props) => {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    if (count < 0 && showNow) setCount(0);
  }, [showNow, count]);

  return (
    <Section>
      {count >= 0 && (
        <SectionInner>
          <Headline>This is my tech skills:</Headline>

          {techs
            .map(({ title, list }, idx) => (
              <TechSection
                key={idx}
                variants={techVariants}
                initial="hidden"
                animate={count >= idx + techs.length ? "visible" : "hidden"}
                onAnimationComplete={() => setCount((count) => count + 1)}
              >
                <TechTitle variants={techVariants}>{title}</TechTitle>

                <TechList variants={techVariants}>
                  {list.map((techName, idx) => (
                    <TechItem key={idx} variants={techItemVariants}>
                      {techName}
                      {idx < list.length - 1 ? ", " : ""}
                    </TechItem>
                  ))}
                </TechList>
              </TechSection>
            ))
            .filter((node) => !!node)}
        </SectionInner>
      )}
    </Section>
  );
};

export default SkillsSection;
