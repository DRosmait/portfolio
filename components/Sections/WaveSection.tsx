import styled from "styled-components";

import WavesBackground from "../WavesBackground";
import { device } from "../../styles/breakpoints";

interface Props {}

const FullHeightSection = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  position: relative;

  @media ${device.mobileS} {
    padding: 0 1.25rem;
  }

  @media ${device.tablet} {
    padding: 0 2rem;
  }
`;

const Background = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function WaveSection({}: Props) {
  return (
    <FullHeightSection>
      <Background>
        <WavesBackground />
      </Background>
    </FullHeightSection>
  );
}
