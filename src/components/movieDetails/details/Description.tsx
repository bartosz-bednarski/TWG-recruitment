import { Text, View, StyleSheet } from "react-native";

const Desciption: React.FC<{ description: string }> = ({ description }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.header}>Description</Text>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    gap: 8,
  },
  header: {
    fontSize: 10,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
  },
  text: {
    fontSize: 12,
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    color: "rgba(43, 45, 66, 1)",
  },
});
export default Desciption;
