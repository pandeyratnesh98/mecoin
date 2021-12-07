import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Signup } from "./src/features/login/Signup.screen";
import { Welcome } from "./src/features/Welcome.screen";
import { addons, Platform, StatusBar, View } from "react-native";
import { Container } from "./src/utils/commonPref.style";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Intros } from "./src/features/Intros/Intros.screen";
import { SignIn } from "./src/features/login/SignIn.screen";
const Stack = createNativeStackNavigator();

const StatusBarContainer = styled.View`
  height: ${Platform.OS === "android"
    ? Math.round(StatusBar.currentHeight) + "px"
    : "20px"};
  background-color: ${({ theme }) => theme.colors.background};
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBarContainer />
        {fontsLoaded && (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="intros"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="intros" component={Intros} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Signin" component={SignIn} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </Container>
    </ThemeProvider>
  );
}
