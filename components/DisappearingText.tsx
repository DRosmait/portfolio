import styled from "styled-components";
import { motion, Transition } from "framer-motion";

import FlexWrapper from "./common/FlexWrapper";

const TextWrapper = styled(FlexWrapper)`
  font-weight: 700;
  overflow: hidden;
`;

const Char = styled(motion.div)`
  color: transparent;
  text-shadow: 0px 0px 0px black;
  display: inline-block;

  :empty {
    padding-right: 0.3em;
  }
`;

const charVariants = {
  hidden: (inFirstHalf: boolean) => ({
    opacity: 0,
    textShadow: "0px 0px 50px white",
    translateY: "-200%",
    translateX: inFirstHalf ? `-400%` : `400%`,
    skew: inFirstHalf ? "60deg" : "-60deg",
  }),

  visible: {
    skew: "0deg",
    translateY: "0%",
    translateX: "0%",
    opacity: 1,
    textShadow: "0px 0px 0px white",
  },
};

interface Props {
  lines: string[];
  onAnimationComplete?: () => void;
  transition?: Partial<Transition>;
}

const DisappearingText = ({
  lines,
  onAnimationComplete = () => {},
  transition = {},
}: Props) => {
  const [allCharsLength, maxLineLength] = lines.reduce(
    ([allCharsLength, maxLength], line) => [
      allCharsLength + line.length,
      line.length > maxLength ? line.length : maxLength,
    ],
    [0, 0]
  );
  const fontSize = `calc(0.5rem + ${Math.floor(100 / maxLineLength)}vw)`;

  return (
    <TextWrapper
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {lines.map((line, lineIdx) => (
        <motion.div
          key={lineIdx}
          style={{
            fontSize,
          }}
        >
          {line.split("").map((char, idx, array) => (
            <Char
              key={idx}
              custom={idx < Math.floor(array.length / 2)}
              transition={{
                delay: idx * 0.2,
                duration: 1,
                repeat: 1,
                repeatType: "mirror",
                repeatDelay: allCharsLength * 0.15,
                ...transition,
              }}
              variants={charVariants}
            >
              {char.trim()}
            </Char>
          ))}
        </motion.div>
      ))}
    </TextWrapper>
  );
};

export default DisappearingText;
