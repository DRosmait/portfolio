import { motion } from "framer-motion";
import styled from "styled-components";

import { device } from "../../styles/breakpoints";

const Headline = styled(motion.h2)`
  font-weight: 700;
  text-align: center;

  @media ${device.mobileLandscapeS} {
    font-size: calc(1.2rem + 1.4vw);
    margin-bottom: 3vh;
  }

  @media ${device.mobileLandscapeL} {
    font-size: calc(1.2rem + 2vw);
    margin-bottom: 5vh;
  }
`;

export default Headline;
