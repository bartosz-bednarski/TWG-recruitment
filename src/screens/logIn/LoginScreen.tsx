import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../../utils/CustomButton";
import InfoText from "../../components/login/Info";
const LoginScreen: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image source={require("../../assets/Logo.png")} />
        <Image source={require("../../assets/app-icon.png")} />
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.welcomeText}>
          Welcome to the best YouTube-based learning application.
        </Text>
        <CustomButton onPress={onPress} title="Log in as guest" />
        <InfoText />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(141, 153, 174, 1)",
    paddingTop: 80,
    paddingBottom: 55,
    paddingLeft: 32,
    paddingRight: 34,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 100,
  },
  topBox: {
    flex: 3,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomBox: {
    flex: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    height: "auto",
    width: "100%",
  },
  welcomeText: {
    fontFamily: "Poppins-medium",
    fontSize: 22,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    width: "100%",
    marginBottom: 32,
    height: "auto",
  },
});
export default LoginScreen;
