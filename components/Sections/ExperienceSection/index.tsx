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
  --swiper-navigation-color: green;
  --swiper-pagination-color: red;
`;

const Wrapper = styled.div``;

const SwiperSlideContent = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rem;
  background-color: #fff;
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <SwiperSlideContent>🤬</SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>🥶</SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>🤡</SwiperSlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideContent>🤖</SwiperSlideContent>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </FullHeightSection>
  );
}
