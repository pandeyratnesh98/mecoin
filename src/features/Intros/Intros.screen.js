import React, { useRef, useState } from "react";
import { View } from "react-native";
import { LogoWithBackground } from "../../components/LogoWithBackground.component";
import {
  ContainerImage,
  Heading,
  Img,
  Para,
} from "../../utils/commonPref.style";
import PagerView from "react-native-pager-view";
import { CircularView } from "../../components/CircularView.component";
import { CONTENTS, getImageWidthHeight, getStyles } from "../../utils";
import styled from "styled-components";
import { BottomContainer } from "./components/BottomContainer.component";
const ViewPager = styled(PagerView)`
  height: 80%;
`;
export const Intros = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const refPagerView = useRef();
  return (
    <LogoWithBackground>
      <ViewPager
        initialPage={page}
        scrollEnabled={false}
        ref={refPagerView}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}>
        {CONTENTS.map(({ id, title, text, icon }) => {
          return (
            <View
              key={id}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Heading>{title}</Heading>
              <Para>{text}</Para>
              <ContainerImage>
                <Img
                  source={icon}
                  width={getImageWidthHeight(id).width}
                  height={getImageWidthHeight(id).height}
                />
                <CircularView
                  width={10}
                  height={10}
                  color="#45F0D1"
                  style={getStyles(id, "sm")}
                />
                <CircularView
                  width={24}
                  height={24}
                  color={id === 2 ? "#FF56A9" : "#45F0D1"}
                  style={getStyles(id, "lg")}
                />
              </ContainerImage>
            </View>
          );
        })}
      </ViewPager>

      <BottomContainer
        page={page}
        refPagerView={refPagerView}
        navigation={navigation}
      />
    </LogoWithBackground>
  );
};
