import { Image, StyleSheet, Text, View } from "react-native";

const ReminderHeader: React.FC = () => {
  return (
    <View style={styles.box}>
      <Image
        source={require("../../assets/icons/notification.png")}
        width={36}
        height={36}
      />
      <Text style={styles.text}>Learning reminders</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    color: "rgba(43, 45, 66, 1)",
  },
});

export default ReminderHeader;
