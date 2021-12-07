import React from "react";
import { TouchableOpacity } from "react-native";
import { CircularView } from "./CircularView.component";

export const Fab = ({ size, color, children, style, callback }) => {
  return (
    <TouchableOpacity style={{ ...style }} onPress={callback}>
      <CircularView
        width={size}
        height={size}
        color={color}
        style={{ alignItems: "center", justifyContent: "center" }}>
        {children}
      </CircularView>
    </TouchableOpacity>
  );
};
