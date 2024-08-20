import { View, Pressable, Text, StyleSheet } from "react-native";

const ButtonsBox: React.FC<{
  onPress: (view: "details" | "notes") => void;
  selectedView: "details" | "notes";
}> = ({ onPress, selectedView }) => {
  return (
    <View style={styles.buttonsBox}>
      <Pressable
        style={[
          styles.button,
          {
            borderColor:
              selectedView === "details"
                ? "rgba(43, 45, 66, 1)"
                : "rgba(200, 200, 200, 1)",
          },
        ]}
        onPress={() => onPress("details")}
      >
        <Text style={styles.buttonText}>Details</Text>
      </Pressable>
      <Pressable
        style={[
          styles.button,
          {
            borderColor:
              selectedView === "notes"
                ? "rgba(43, 45, 66, 1)"
                : "rgba(200, 200, 200, 1)",
          },
        ]}
        onPress={() => onPress("notes")}
      >
        <Text style={styles.buttonText}>Notes</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsBox: {
    flexDirection: "row",
    paddingHorizontal: 16,
    width: "100%",
    marginTop: 19,
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(200, 200, 200, 1)",
    borderBottomWidth: 2,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
  },
});
export default ButtonsBox;
