import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import "the-new-css-reset/css/reset.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }

  .swiper-global {
    & > .swiper-wrapper {
      height: 100vh;
    }
  }

  @media (hover: none) {
    .swiper-global {
      overflow: visible !important;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
