import styled from "styled-components";
import { motion } from "framer-motion";

import { device } from "../../styles/breakpoints";

const Section = styled(motion.section)`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media ${device.mobileS} {
    padding: 0 1.25rem;
  }

  @media ${device.tablet} {
    padding: 0 2rem;
  }
`;

export default Section;
