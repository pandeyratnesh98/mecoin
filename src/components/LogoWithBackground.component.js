import { StatusBar as Status } from "expo-status-bar";
import React from "react";
import { Container, Row, Svg } from "../utils/commonPref.style";
import { Me } from "../../assets/Me";
import { Coin } from "../../assets/Coin";
export const LogoWithBackground = ({ children }) => {
  return (
    <Container>
      <Row>
        <Svg xml={Me} width="32" height="24" />
        <Svg xml={Coin} width="40" height="24" />
      </Row>
      {children}
      <Status style="light" />
    </Container>
  );
};
