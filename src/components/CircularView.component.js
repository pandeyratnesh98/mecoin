import React from "react";
import { View } from "react-native";
import styled from "styled-components";

export const CircularView = ({ width, height, color, style, children }) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: width / 2,
        ...style,
      }}>
      {children}
    </View>
  );
};
