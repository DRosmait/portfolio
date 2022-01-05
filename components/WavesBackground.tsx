import styled, { keyframes } from "styled-components";

interface Props {}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  position: relative;
`;

const moveWave = keyframes`
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
`;

const Top = styled.div`
  flex-grow: 3;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Bottom = styled.div`
  background-color: white;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  width: 100%;

  &:after {
    content: "";
    display: block;
    background: white;
    height: 100vh;
    position: absolute;
    bottom: -99vh;
    width: 100%;
  }
`;

const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;

  .parallax > use {
    animation: ${moveWave} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
`;

export default function WavesBackground({}: Props) {
  return (
    <Wrapper>
      <Top />
      <Waves
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </Waves>
      <Bottom />
    </Wrapper>
  );
}
