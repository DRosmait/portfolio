import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const tilting = keyframes`
  0% {
    transform: rotate(1deg);
  }
  50% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(1deg);
  }
`;

const floating = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 5vh);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const floatingSecondary = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 1vh);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const neonLight = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const FloatingOuterDiv = styled.div`
  animation: ${floating} 5s cubic-bezier(0.37, 0, 0.63, 1) infinite,
    ${neonLight} 30s linear infinite;
  align-items: center;
  display: flex;
  font-size: 8rem;
  font-weight: bold;
  justify-content: center;
  height: 100vh;
  text-shadow: 0 0 12px #0072ff, 0 0 50px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
`;

const TitltingWrapper = styled.div`
  align-items: center;
  animation: ${tilting} 10s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  display: flex;
  justify-content: center;
`;

const FloatingCharacter = styled.div`
  animation: ${floatingSecondary} 2.5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  font-weight: 700;
  transition: font-weight 0.4s ease-in;
`;

export default function FloatingText({ text }: Props) {
  return (
    <FloatingOuterDiv>
      <TitltingWrapper>
        {text.split("").map((i, idx) => (
          <FloatingCharacter
            key={idx}
            style={{ animationDelay: `${idx * 1 + 1}s` }}
          >
            {i}
          </FloatingCharacter>
        ))}
      </TitltingWrapper>
    </FloatingOuterDiv>
  );
}
