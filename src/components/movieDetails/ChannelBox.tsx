import { Image, StyleSheet, Text, View } from "react-native";

const ChannelBox: React.FC<{ channel: string }> = ({ channel }) => {
  return (
    <View style={styles.box}>
      <Image
        source={require("../../assets/icons/person.png")}
        width={42}
        height={42}
      />
      <Text style={styles.channel}>{channel}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
  },
  channel: {
    fontSize: 14,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
  },
});

export default ChannelBox;
