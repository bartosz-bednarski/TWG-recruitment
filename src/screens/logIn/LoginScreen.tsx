import { View, Text, Button, Image, StyleSheet } from "react-native";
import { getFontFamily } from "../../utils/fontFamily";
const LoginScreen: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <View style={Style.container}>
      <Image source={require("../../assets/Logo.png")} />
      <Image source={require("../../assets/app-icon.png")} />
      <Text>YoutTube</Text>
      <Text style={Style.welcomeText}>
        Welcome to the best YouTube-based learning application.
      </Text>
      <Button onPress={onPress} title="Log in as guest" />
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(141, 153, 174, 1)",
    paddingTop: 80,
    paddingBottom: 55,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  welcomeText: {
    fontFamily: "Poppins-regular",
  },
});
export default LoginScreen;
