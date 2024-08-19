import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const InfoText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>By continuing you agree with </Text>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://thewidlarzgroup.github.io/react-native-video/"
            )
          }
        >
          <Text style={styles.link}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.text}> and </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://thewidlarzgroup.github.io/react-native-video/"
            )
          }
        >
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    lineHeight: 16,
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    fontFamily: "Poppins-medium",
    color: "white",
  },
  link: {
    lineHeight: 16,
    fontSize: 13,
    color: "rgba(43, 45, 66, 1)",
    fontWeight: "400",
    textDecorationLine: "underline",
    fontFamily: "Poppins-medium",
  },
});
export default InfoText;
