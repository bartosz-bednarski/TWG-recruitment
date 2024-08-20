import { Image, StyleSheet, Text, View } from "react-native";

const ProfileBox: React.FC = () => {
  return (
    <View style={styles.box}>
      <Image
        source={require("../../assets/icons/person.png")}
        width={42}
        height={42}
      />
      <Text style={styles.channel}>John Doe</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 50,
    borderBottomColor: "rgba(43, 45, 66, 1)",
    borderBottomWidth: 2,
  },
  channel: {
    fontSize: 14,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
  },
});

export default ProfileBox;
