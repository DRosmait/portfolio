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
            My previous experiance:
          </Headline>

          <motion.div variants={swiperVariants}>
            <SwiperStyled
              modules={[Navigation, A11y]}
              navigation
              onSlideChange={setStep}
            >
              <SwiperSlide>
                <SwiperSlideContent>
                  <Card>
                    <CardPositionName>Front-End Developer</CardPositionName>
                    <CardCompanyName>Soil & More Impacts GmbH</CardCompanyName>
                    <CardPeriod>Oktober 2020 bis Heute</CardPeriod>
                    <CardPositionDescription>
                      FE Entwicklung SaaS für Optimierung Beschaffungschancen
                      und Risiken angesichts des Klimawandels.
                    </CardPositionDescription>
                  </Card>
                </SwiperSlideContent>
              </SwiperSlide>

              <SwiperSlide>
                <SwiperSlideContent>
                  <Card>
                    <CardPositionName>Front-End Developer</CardPositionName>
                    <CardCompanyName>Neveling.net Reply GmbH</CardCompanyName>
                    <CardPeriod>August 2017 bis Oktober 2020</CardPeriod>
                    <CardPositionDescription>
                      Implementierung FE-Architektur in Sitecore CSM Projekten;
                      Integration Third-Party Libraries; permanentes
                      Refactoring, Code Reviews, Team Unterstützung und Workshop
                      Führung.
                    </CardPositionDescription>
                  </Card>
                </SwiperSlideContent>
              </SwiperSlide>
            </SwiperStyled>
          </motion.div>
        </SectionInner>
      )}
    </SectionStyled>
  );
}
