import { useState, useEffect } from "react";
import styled from "styled-components";
import { Navigation, A11y, Swiper as ISwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Headline from "../common/Headline";
import { device } from "../../styles/breakpoints";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Section from "../common/Section";
import SectionInner from "../common/SectionInner";
import { motion } from "framer-motion";

const SectionStyled = styled(Section)`
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;

  @media ${device.mobileS} {
    padding: 0;
  }
`;

const SwiperStyled = styled(Swiper)`
  & > .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    opacity: 0;
    transition: opacity 0.3s 0.1s ease-in;

    &-active {
      opacity: 1;
    }
  }
`;

const SwiperSlideContent = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  width: 80%;

  @media ${device.mobileS} {
    padding: 1.5rem 1.5rem;
  }

  @media ${device.desktopM} {
    padding: 2.5rem 3rem;
  }
`;

const CardPositionName = styled.div`
  font-size: calc(1rem + 1vw);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const CardCompanyName = styled.h3`
  font-size: calc(1rem + 2vw);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardPeriod = styled.div`
  font-size: calc(1rem + 0.5vw);
  font-weight: 100;
  margin-bottom: 1rem;
`;

const CardPositionDescription = styled.div`
  font-size: calc(1rem + 0.2vw);
`;

interface Props {
  showNow: boolean;
  setStep: (swiper: ISwiper) => void;
}

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Soil & More Impacts GmbH",
    position: "Full-stack developer",
    period: "October 2020 - January 2022",
    description:
      "BE and FE development of a SaaS for optimizing procurement opportunities and risks in light of climate change.",
  },
  {
    company: "Neveling.net Reply GmbH",
    position: "Front-end developer",
    period: "August 2017 - October 2020",
    description:
      "Development of FE-architectures for Sitecore CSM projects; Integration and extending third-party libraries; team couching, code reviewing, permanent refactoring, workshop leadership.",
  },
  {
    company: "JessenLenz GmbH",
    position: "Sales assistance in Apple Premium Reseller Shop",
    period: "August 2016 - August 2017",
    description:
      "Sales of hard- und software, technical support, preparing and calculation of offers.",
  },
  {
    company: "Freelance",
    position: "Front-end developer",
    period: "March 2015 - Jun 2016",
    description: "Front-End development of online learning platforms.",
  },
  {
    company: "Oshadbank (Ukraine)",
    position: "IT-engineer of informatic and automatization",
    period: "Jun 2010 - December 2014",
    description:
      "Depository database support, updating and troubleshooting; creation of monthly controlling statistics, ensuring banking operations and service integrity.",
  },
  {
    company: "Majak GmbH (Ukraine)",
    position: "Sales staff",
    period: "August 2007 - Jun 2010",
    description:
      "Customer advice and sale of hardware and software; building and configuring of IT systems; installation of user software and system optimization.",
  },
];

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
      delay: 0.3,
    },
  },
};

const swiperVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
};

export default function ExperienceSection({ showNow, setStep }: Props) {
  const [wasShown, setWasShown] = useState(false);

  useEffect(() => {
    if (!wasShown && showNow) setWasShown(true);
  }, [showNow, wasShown, setWasShown]);

  return (
    <SectionStyled>
      {wasShown && (
        <SectionInner initial="hidden" animate="visible">
          <Headline variants={headlineVariants}>
            My previous experience:
          </Headline>

          <motion.div variants={swiperVariants}>
            <SwiperStyled
              modules={[Navigation, A11y]}
              navigation
              onSlideChange={setStep}
            >
              {experiences.map((exp, idx) => (
                <SwiperSlide key={idx}>
                  <SwiperSlideContent>
                    <Card>
                      <CardPositionName>{exp.position}</CardPositionName>
                      <CardCompanyName>{exp.company}</CardCompanyName>
                      <CardPeriod>{exp.period}</CardPeriod>
                      <CardPositionDescription>
                        {exp.description}
                      </CardPositionDescription>
                    </Card>
                  </SwiperSlideContent>
                </SwiperSlide>
              ))}
            </SwiperStyled>
          </motion.div>
        </SectionInner>
      )}
    </SectionStyled>
  );
}
