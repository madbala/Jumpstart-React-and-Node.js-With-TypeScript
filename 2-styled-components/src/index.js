import React from "react";
import { createRoot } from "react-dom/client";
import styled from "styled-components";

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


const Header = styled.h1`
@media ${device.mobileS} { 
  color:green;
  font-size: 24px;
}

@media ${device.mobileM} {
  color:green;
  font-size: 24px;
}

@media ${device.mobileL} { 
  color:green;
  font-size: 24px;
}
@media ${device.laptop} {
  color:red;
}

@media ${device.desktop} {
  color:red;
}
`;
const Hero = styled(Header)`color:blue;font-size:100px`;
const App = () => {
  return <>
  <Hero>I am a hero</Hero>
  <Header>Hello React - Task 2!</Header>
  </>
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
