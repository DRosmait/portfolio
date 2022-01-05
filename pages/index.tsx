import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Scrollbar, Mousewheel, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import WelcomeSection from "../components/sections/WelcomeSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import WaveSection from "../components/sections/WaveSection";

const MainSection = styled(motion.main)`
  color: white;
`;

const sectionVariants = {
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
};

const Home: NextPage = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
        >
          <SwiperSlide key="1">
            <WelcomeSection step={step} setStep={setStep} />
          </SwiperSlide>

          {/* {step >= 3 && ( */}
          <>
            <SwiperSlide key="2">
              <ExperienceSection />
            </SwiperSlide>

            <SwiperSlide key="3">
              <WaveSection />
            </SwiperSlide>
          </>
          {/* )} */}
        </Swiper>
      </MainSection>

      <footer></footer>
    </div>
  );
};

export default Home;
