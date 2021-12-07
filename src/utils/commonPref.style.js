import styled from "styled-components";
import { Headline, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.lg};
`;
export const CenteredRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.lg};
`;
export const Svg = styled(SvgXml)`
  margin-left: ${({ theme }) => theme.spacings.xsm};
`;
export const BottomToTopContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacings.xxl};
  align-items: center;
`;
export const Para = styled(Paragraph)`
  font-family: Poppins_400Regular;
  color: ${({ theme, color }) =>
    color ? color : theme.colors.fontColors.white};
  justify-content: center;
  width: ${({ width }) => (width ? width : "70%")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  padding-bottom: ${({ theme }) => theme.spacings.xxl};
  padding-left: ${({ theme }) => theme.spacings.sm};
`;
export const Heading = styled(Headline)`
  font-family: Poppins_700Bold;
  color: ${({ theme }) => theme.colors.fontColors.white};
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacings.sm};
  margin-top: ${({ theme, mt }) => (mt ? mt + "px" : "16px")};
`;
export const ContainerImage = styled.View`
  justify-content: center;
  width: 80%;
  align-items: center;
  margin-bottom: ${({ bottom }) => (bottom ? bottom + "px" : "80px")};
  margin-top: ${({ top }) => (top ? top + "px" : "80px")};
`;

export const Img = styled.Image`
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  margin-bottom: ${({ theme }) => theme.spacings.xxl};
`;
