import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/screens/logIn/LoginScreen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "./src/screens/movieDetails/MovieDetailsScreen";
import BottomTabsNavigator from "./src/navigators/BottomTabsNavigator";
import SettingsScreen from "./src/screens/settings/SettingsScreen";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});
SplashScreen.preventAutoHideAsync();
export default function App() {
  const navTheme = DefaultTheme;
  const Stack = createNativeStackNavigator();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, error] = useFonts({
    "Poppins-regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      {!authenticated && <LoginScreen onPress={() => setAuthenticated(true)} />}
      {authenticated && (
        <>
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator>
              <Stack.Screen
                component={BottomTabsNavigator}
                name="bottomTabsNav"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                component={MovieDetailsScreen}
                name="movieDetails"
                options={{ headerShown: false }}
              />
              <Stack.Screen component={SettingsScreen} name="Settings" />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
}
