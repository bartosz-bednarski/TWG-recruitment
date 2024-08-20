import { Pressable, StyleSheet, Text, View } from "react-native";

const ListItemModal: React.FC<{
  value: string;
  order: "relevance" | "date" | "viewCount";
  selectedValue: { title: string; order: string };
  onPress: (value: string, order: "relevance" | "date" | "viewCount") => void;
}> = ({ value, selectedValue, onPress, order }) => {
  return (
    <Pressable style={styles.rowBox} onPress={() => onPress(value, order)}>
      <View style={styles.circleOutside}>
        {value === selectedValue.title && (
          <View style={styles.circleInside}></View>
        )}
      </View>
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowBox: {
    flexDirection: "row",
    width: "100%",
    gap: 24,
  },
  circleOutside: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circleInside: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "rgba(43, 45, 66, 1)",
  },
  text: {
    fontFamily: "Poppins-medium",
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },
});
export default ListItemModal;
