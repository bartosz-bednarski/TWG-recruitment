import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/logIn/LoginScreen";
import MainNavigator from "./src/navigators/MainNavigator";
import SearchScreen from "./src/screens/search/SearchScreen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchNavigator from "./src/navigators/SearchNavigator";
import { Ionicons } from "@expo/vector-icons";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const navTheme = DefaultTheme;
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();
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
        <NavigationContainer theme={navTheme}>
          <BottomTabs.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "rgba(141, 153, 174, 1)",
                padding: 10,
                height: 72,
              },
              tabBarActiveTintColor: "rgba(43, 45, 66, 1)",
              tabBarInactiveTintColor: "white",
              tabBarLabelStyle: {
                fontSize: 16,
                fontFamily: "Poppins-regular",
                fontWeight: "400",
              },
            }}
          >
            <BottomTabs.Screen
              component={MainNavigator}
              name="Home"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={32} />
                ),
              }}
            />
            <BottomTabs.Screen
              component={SearchNavigator}
              name="Search"
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search" color={color} size={32} />
                ),
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins",
  },
});
