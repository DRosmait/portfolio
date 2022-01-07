import { motion } from "framer-motion";
import styled from "styled-components";

const Headline = styled(motion.h2)`
  font-size: calc(1.2rem + 2vw);
  font-weight: 700;
  margin-bottom: 5vh;
  text-align: center;
`;

export default Headline;
