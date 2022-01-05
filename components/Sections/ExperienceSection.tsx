import styled from "styled-components";
import { Navigation, Pagination, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const FullHeightSection = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;
`;

const Wrapper = styled.div``;

const SwiperSlideContent = styled.div`
  min-height: 50vh;
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
  font-size: calc(1rem + 1vh);
  font-weight: 400;
  margin-bottom: 1rem;
`;

const CardCompanyName = styled.h3`
  font-size: calc(1rem + 2vh);
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CardPeriod = styled.div`
  font-size: calc(1rem + 0.5vh);
  font-weight: 100;
  margin-bottom: 1rem;
`;

const CardPositionDescription = styled.div`
  font-size: calc(1rem + 0.2vh);
  margin-bottom: 1rem;
`;

export default function Some() {
  return (
    <FullHeightSection>
      <Wrapper>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
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
        </Swiper>
      </Wrapper>
    </FullHeightSection>
  );
}
