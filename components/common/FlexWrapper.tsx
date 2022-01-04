import styled from "styled-components";
import { motion } from "framer-motion";

const FlexWrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;

export default FlexWrapper;
