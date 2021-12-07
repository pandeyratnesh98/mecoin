import React from "react";
import { StyleSheet } from "react-native";
import { TextInput as TextInputPaper } from "react-native-paper";
export const TextInput = ({
  label,
  left,
  leftCallback,
  right,
  rightCallback,
  secureText,
}) => {
  return (
    <TextInputPaper
      mode="outlined"
      label={label}
      outlineColor="#957DEB"
      activeOutlineColor="#957DEB"
      secureTextEntry={secureText}
      selectionColor="#fff"
      placeholderTextColor="#979797"
      left={
        left && (
          <TextInputPaper.Icon
            name={left}
            color="#C4C4C4"
            onPress={leftCallback}
          />
        )
      }
      right={
        right && (
          <TextInputPaper.Icon
            name={right}
            onPress={rightCallback}
            color="#C4C4C4"
          />
        )
      }
      style={styles.textInput}
      theme={{ colors: { text: "#fff", placeholder: "#979797" } }}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: "80%",
    backgroundColor: "#272E4A",
    marginBottom: 16,
    color: "#fff",
  },
});
