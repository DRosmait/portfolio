import styled from "styled-components";

import Section from "../common/Section";
import WavesBackground from "../WavesBackground";

interface Props {}

const Background = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function ContactSection({}: Props) {
  return (
    <Section>
      <Background>
        <WavesBackground />
      </Background>
    </Section>
  );
}
