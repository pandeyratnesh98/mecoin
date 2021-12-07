import React from "react";
import { Fab } from "../../../components/Fab.component";
import { BottomToTopContainer, Row } from "../../../utils/commonPref.style";
import { AntDesign } from "@expo/vector-icons";
import { CONTENTS } from "../../../utils";
import { StyleSheet } from "react-native";
import { CircularView } from "../../../components/CircularView.component";

export const BottomContainer = ({ page, navigation, refPagerView }) => {
  return (
    <BottomToTopContainer>
      <Row>
        <Fab
          size={60}
          color="#C4C4C4"
          style={styles.FabSkip}
          callback={() => navigation.navigate("Welcome")}>
          <AntDesign name="doubleright" size={24} color="#F15E9E" />
        </Fab>
        {CONTENTS.map((content) => {
          return (
            <CircularView
              key={content.id}
              width={10}
              height={10}
              color="#45F0D1"
              style={
                content.id === page
                  ? styles.selectedIndicator
                  : styles.Indicator
              }
            />
          );
        })}
        <Fab
          size={60}
          color="#F15E9E"
          callback={() => {
            page === 2
              ? navigation.navigate("Welcome")
              : refPagerView.current.setPage(page + 1);
          }}
          style={styles.fabNext}>
          <AntDesign name="right" size={24} color="#fff" />
        </Fab>
      </Row>
    </BottomToTopContainer>
  );
};
const styles = StyleSheet.create({
  FabSkip: {
    position: "absolute",
    left: 1,
    marginLeft: 24,
  },
  fabNext: {
    position: "absolute",
    right: 1,
    marginRight: 24,
  },
  selectedIndicator: {
    paddingRight: 20,
    marginLeft: 10,
  },
  Indicator: {
    marginLeft: 10,
  },
});
