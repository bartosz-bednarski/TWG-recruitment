import { Text, View, StyleSheet } from "react-native";

const MovieDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Movie details screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
});
export default MovieDetailsScreen;
