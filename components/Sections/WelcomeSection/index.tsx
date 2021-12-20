import styled from "styled-components";

import FloatingText from "../../FloatingText";

interface Props {}

const FullHeightSection = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  overflow: hidden;
`;

export default function WelcomeSection({}: Props) {
  return (
    <FullHeightSection>
      <FloatingText text="Hello" />
    </FullHeightSection>
  );
}
