import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Title } from "react-native-paper";

const Button = styled(TouchableOpacity)`
  width: 90%;
  margin-top: 15px;
  height: 50px;
  border-radius: 10px;
`;
const Gradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  border-radius: 10px;
`;

export const GradientButton = ({
  onPress,
  colors,
  text,
  renderIcon,
  textColor = "#000",
}) => {
  return (
    <Button onPress={onPress}>
      <Gradient
        colors={colors}
        start={{ x: 1.0, y: 0.8 }}
        end={{ x: 0.4, y: 0.5 }}>
        <View style={styles.buttonContainer}>
          {renderIcon && renderIcon}
          <Title style={{ color: textColor, ...styles.buttonText }}>
            {text}
          </Title>
        </View>
      </Gradient>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Poppins_400Regular",
    marginStart: 15,
  },
});
