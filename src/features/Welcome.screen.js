import React from "react";
import { StyleSheet } from "react-native";
import { CircularView } from "../components/CircularView.component";
import { GradientButton } from "../components/GradientButoon.component";
import { LogoWithBackground } from "../components/LogoWithBackground.component";
import {
  BottomToTopContainer,
  ContainerImage,
  Img,
  Para,
  Heading,
} from "../utils/commonPref.style";
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna";
export const Welcome = ({ navigation }) => {
  return (
    <LogoWithBackground>
      <BottomToTopContainer>
        <ContainerImage>
          <Img
            source={require("../../assets/wallet.png")}
            width={180}
            height={160}
          />
          <CircularView
            width={10}
            height={10}
            color="#45F0D1"
            style={styles.circle}
          />
        </ContainerImage>
        <Heading>Welcome to MECoins</Heading>
        <Para>{content}</Para>
        <GradientButton
          text="Sign In"
          colors={["#957DEB", "#F15E9E"]}
          textColor="#fff"
          onPress={() => navigation.navigate("Signin")}
        />
        <GradientButton
          text="Sign Up"
          colors={["#C4C4C4", "#C6C6C6"]}
          textColor="#fff"
          onPress={() => navigation.navigate("Signup")}
        />
      </BottomToTopContainer>
    </LogoWithBackground>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    right: 1,
    bottom: 1,
    marginRight: 50,
  },
});
