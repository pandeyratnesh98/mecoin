import React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, TextInput as Input } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { GradientButton } from "../../components/GradientButoon.component";
import { LogoWithBackground } from "../../components/LogoWithBackground.component";
import { TextInput } from "../../components/TextInput.component";
import {
  BottomToTopContainer,
  Heading,
  Para,
  Row,
} from "../../utils/commonPref.style";

export const Signup = ({ navigation }) => {
  const [secureText, setsecureTextEntry] = useState(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Owner", value: "own" },
    { label: "Tenant", value: "ten" },
    { label: "User", value: "user" },
  ]);
  return (
    <LogoWithBackground>
      <Heading mt={36}>Sign Up</Heading>
      <BottomToTopContainer>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          style={styles.dropdown}
          placeholder="Account Type"
          placeholderStyle={{ color: "#979797" }}
          arrowIconStyle={{ tintColor: "#979797" }}
          listItemLabelStyle={{ color: "#979797" }}
        />

        <TextInput label="Full Name" left="circle" />
        <TextInput label="Phone number" left="phone" />
        <TextInput label="Email" left="email" />
        <TextInput
          label="password"
          left="key"
          right="eye"
          rightCallback={() => setsecureTextEntry(!secureText)}
          secureText={secureText}
        />
        <GradientButton
          text="Sign Up"
          colors={["#957DEB", "#F15E9E"]}
          textColor="#fff"
          onPress={() => navigation.navigate("Signin")}
        />
        <Row>
          <Para width="50%">Already have an account?</Para>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Para width="100%" color="#F15E9E" textAlign="left">
              Sign In
            </Para>
          </TouchableOpacity>
        </Row>
      </BottomToTopContainer>
    </LogoWithBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dropDownContainerStyle: {
    backgroundColor: "#272E4A",
    zIndex: 1000,
    elevation: 1000,
    borderColor: "#957DEB",
    width: "80%",
    alignSelf: "center",
  },
  dropdown: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#272E4A",
    borderColor: "#957DEB",
    marginBottom: 24,
    color: "#979797",
  },
});
