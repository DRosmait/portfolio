import styled from "styled-components";

import { device } from "../../styles/breakpoints";

const SectionInner = styled.div`
  @media ${device.desktopM} {
    align-self: center;
    width: 80rem;
  }

  @media ${device.desktopL} {
    width: 90rem;
  }

  @media ${device.desktopXL} {
    width: 120rem;
  }
`;

export default SectionInner;
