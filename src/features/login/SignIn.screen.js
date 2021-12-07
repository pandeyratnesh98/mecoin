import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { GradientButton } from "../../components/GradientButoon.component";
import { LogoWithBackground } from "../../components/LogoWithBackground.component";
import {
  BottomToTopContainer,
  Heading,
  Para,
  Row,
} from "../../utils/commonPref.style";
import { Checkbox, TextInput as TextInputPaper } from "react-native-paper";
import { useState } from "react";
import { TextInput } from "../../components/TextInput.component";

const Icon = <AntDesign name="google" size={24} color="white" />;
export const SignIn = ({ navigation }) => {
  const [isRememberMe, setisRememberMe] = useState(false);
  const [secureText, setsecureTextEntry] = useState(true);
  return (
    <LogoWithBackground>
      <ScrollView style={{ flex: 1, marginTop: 80 }}>
        <Heading mt={36}>Sign In</Heading>
        <BottomToTopContainer>
          <TextInput
            label="Email / Mobile number"
            left="circle"
            secureText={false}
          />

          <TextInput
            label="password"
            left="key"
            right="eye"
            rightCallback={() => setsecureTextEntry(!secureText)}
            secureText={secureText}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox
              status={isRememberMe ? "checked" : "unchecked"}
              onPress={() => {
                setisRememberMe(!isRememberMe);
              }}
              color="#fff"
              uncheckedColor="#fff"
            />
            <Para textAlign="left" width="40%">
              Remember Password
            </Para>
          </View>
          <Para>Forgot Password?</Para>

          <GradientButton
            text="Sign In"
            colors={["#957DEB", "#F15E9E"]}
            textColor="#fff"
            onPress={() => navigation.navigate("Signin")}
          />
          <GradientButton
            text="Google Login"
            colors={["#957DEB", "#F15E9E"]}
            textColor="#fff"
            onPress={() => navigation.navigate("Signin")}
            renderIcon={Icon}
          />
          <Row>
            <Para width="50%">Didn't have an account?</Para>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Para width="100%" color="#F15E9E" textAlign="left">
                Sign Up
              </Para>
            </TouchableOpacity>
          </Row>
        </BottomToTopContainer>
      </ScrollView>
    </LogoWithBackground>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
  },
  KeyboardAvoidable: {
    flex: 1,
  },
});
