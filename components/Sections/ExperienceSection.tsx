import styled from "styled-components";
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../styles/breakpoints";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const FullHeightSection = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;

  @media ${device.tablet} {
    padding: 0 2rem;
  }

  @media ${device.desktopM} {
    padding: 0 2rem;
  }
`;

const Headline = styled.h1`
  font-size: calc(1rem + 2vw);
  margin-bottom: 5vh;
  text-align: center;
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
  padding: 2rem;
  width: 80vw;
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

export default function Some() {
  return (
    <FullHeightSection>
      <div>
        <Headline>My previous experiance:</Headline>
        <SwiperStyled modules={[Navigation, A11y]} navigation>
          <SwiperSlide>
            <SwiperSlideContent>
              <Card>
                <CardPositionName>Front-End Developer</CardPositionName>
                <CardCompanyName>Soil & More Impacts GmbH</CardCompanyName>
                <CardPeriod>Oktober 2020 bis Heute</CardPeriod>
                <CardPositionDescription>
                  FE Entwicklung SaaS für Optimierung Beschaffungschancen und
                  Risiken angesichts des Klimawandels.
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
                  Integration Third-Party Libraries; permanentes Refactoring,
                  Code Reviews, Team Unterstützung und Workshop Führung.
                </CardPositionDescription>
              </Card>
            </SwiperSlideContent>
          </SwiperSlide>
        </SwiperStyled>
      </div>
    </FullHeightSection>
  );
}