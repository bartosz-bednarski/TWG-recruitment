import { Pressable, StyleSheet, Text } from "react-native";

const SortBy: React.FC = () => {
  return (
    <Pressable style={styles.rowBox}>
      <Text style={styles.text}>Sort by:</Text>
      <Text style={[styles.text, { fontWeight: "600" }]}>Most popular</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 12,
  },
  text: {
    fontFamily: "Poppins-medium",
    fontSize: 12,
    fontWeight: "400",
  },
});
export default SortBy;
