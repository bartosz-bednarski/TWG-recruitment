import { StyleSheet, Text, View } from "react-native";

const ResultsFound: React.FC<{ title: string; number: number }> = ({
  title,
  number,
}) => {
  return (
    <View style={styles.rowBox}>
      <Text style={styles.text}>{number} results found for: </Text>
      <Text style={[styles.text, { fontWeight: "700" }]}>“{title}”</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBox: {
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    fontFamily: "Poppins-medium",
    fontSize: 10,
    fontWeight: "400",
  },
});
export default ResultsFound;
