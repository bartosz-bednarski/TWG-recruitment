import { Pressable, StyleSheet, Text } from "react-native";

const SortBy: React.FC<{ onPress: () => void; sortBy: string }> = ({
  onPress,
  sortBy,
}) => {
  return (
    <Pressable style={styles.rowBox} onPress={onPress}>
      <Text style={styles.text}>Sort by:</Text>
      <Text style={[styles.text, { fontWeight: "700", marginLeft: 5 }]}>
        {sortBy}
      </Text>
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
