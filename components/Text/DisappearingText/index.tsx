import styled from "styled-components";
import { motion, Transition } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  font-weight: 700;
`;

const Char = styled(motion.div)`
  color: transparent;
  text-shadow: 0px 0px 0px black;
  display: inline-block;

  :empty {
    padding-right: 0.3em;
  }
`;

const screenVariants = {
  start: (inFirstHalf: boolean) => ({
    opacity: 0,
    textShadow: "0px 0px 50px white",
    translateY: "-200%",
    translateX: inFirstHalf ? `-400%` : `400%`,
    skew: inFirstHalf ? "60deg" : "-60deg",
  }),

  end: {
    skew: "0deg",
    translateY: "0%",
    translateX: "0%",
    opacity: 1,
    textShadow: "0px 0px 0px white",
  },
};

interface Props {
  lines: string[];
  animate: string;
  onAnimationComplete?: () => void;
  transition?: Partial<Transition>;
}

const DisappearingText = ({
  lines,
  animate,
  onAnimationComplete = () => {},
  transition = {},
}: Props) => {
  const [allLineLength, maxLineLength] = lines.reduce(
    ([allLinesLength, maxLength], line) => [
      allLinesLength + line.length,
      line.length > maxLength ? line.length : maxLength,
    ],
    [0, 0]
  );
  const fontSize = `calc(0.7rem + ${Math.floor(100 / maxLineLength)}vw)`;

  return (
    <Wrapper
      initial={false}
      animate={animate}
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
                repeatType: "reverse",
                repeatDelay: allLineLength * 0.15,
                ...transition,
              }}
              variants={screenVariants}
            >
              {char.trim()}
            </Char>
          ))}
        </motion.div>
      ))}
    </Wrapper>
  );
};

export default DisappearingText;
