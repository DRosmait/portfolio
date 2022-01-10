import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Scrollbar, Mousewheel, A11y, Swiper as ISwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import WelcomeSection from "../components/sections/WelcomeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectSection from "../components/sections/ProjectSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";

const MainSection = styled(motion.main)`
  color: white;
`;

const sectionVariants = {
  // Welcome section
  0: {
    backgroundColor: "hsl(172, 100%, 41%)",
  },
  1: {
    backgroundColor: "hsl(269, 100%, 72%)",
  },
  2: {
    backgroundColor: "hsl(45, 100%, 67%)",
  },
  3: {
    backgroundColor: "hsl(200, 100%, 67%)",
  },
  // Experience section
  4: {
    backgroundColor: "hsl(153, 100%, 37%)",
  },
  5: {
    backgroundColor: "hsl(221, 100%, 31%)",
  },
  6: {
    backgroundColor: "hsl(45, 100%, 67%)",
  },
  7: {
    backgroundColor: "hsl(8, 100%, 67%)",
  },
  8: {
    backgroundColor: "hsl(217, 100%, 64%)",
  },
  9: {
    backgroundColor: "hsl(269, 100%, 72%)",
  },
  // Projects section
  10: {
    backgroundColor: "hsl(45, 100%, 67%)",
  },
  // Tech Stack section
  11: {
    backgroundColor: "hsl(8, 100%, 67%)",
  },
  // Contact section
  12: {
    backgroundColor: "hsl(217, 100%, 64%)",
  },
};

const Home: NextPage = () => {
  const [step, setStep] = useState(0);

  const setStepOnSlideChange = ({ activeIndex }: ISwiper) => {
    switch (activeIndex) {
      case 0: // Welcome section
        setStep(3);
        break;
      case 1: // Experience section
        setStep(4);
        break;
      case 2: // Skills section
        setStep(10);
        break;
      case 3: // Skills section
        setStep(11);
        break;
      case 4: // Contact section
        setStep(12);
        break;
    }
  };

  const setStepOnExperienceSlideChange = ({ activeIndex }: ISwiper) => {
    setStep(4 + activeIndex); // 4 is starting point for Experience section
  };

  return (
    <div>
      <Head>
        <title>Dima Rosmait - Web developer</title>
        <meta name="description" content="Portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection
        variants={sectionVariants}
        animate={step.toString()}
        initial={false}
        transition={{ duration: 2 }}
      >
        <Swiper
          className="swiper-global"
          direction="vertical"
          modules={[Scrollbar, Mousewheel, A11y]}
          scrollbar={{ draggable: true, hide: true }}
          mousewheel={true}
          draggable={false}
          onSlideChange={setStepOnSlideChange}
        >
          <SwiperSlide key="1">
            <WelcomeSection step={step} setStep={setStep} />
          </SwiperSlide>

          {step >= 3 && (
            <>
              <SwiperSlide key="2">
                <ExperienceSection
                  showNow={step === 4}
                  setStep={setStepOnExperienceSlideChange}
                />
              </SwiperSlide>

              <SwiperSlide key="3">
                <ProjectSection showNow={step === 10} />
              </SwiperSlide>

              <SwiperSlide key="4">
                <SkillsSection showNow={step === 11} />
              </SwiperSlide>

              <SwiperSlide key="5">
                <ContactSection showNow={step === 12} />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </MainSection>

      <footer></footer>
    </div>
  );
};

export default Home;
