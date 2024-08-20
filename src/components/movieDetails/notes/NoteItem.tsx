import { StyleSheet, Text, View } from "react-native";

const NoteItem: React.FC<{ content: string }> = ({ content }) => {
  return (
    <View style={styles.noteBox}>
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.time}>2:08</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  noteBox: {
    flexDirection: "column",
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(200, 200, 200, 1)",
    padding: 12,
    marginVertical: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    color: "rgba(43, 45, 66, 1)",
  },
  time: {
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    fontSize: 10,
    textAlign: "right",
    color: "rgba(43, 45, 66, 1)",
  },
});

export default NoteItem;
