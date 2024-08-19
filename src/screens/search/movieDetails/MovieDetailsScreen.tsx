import { Text, View, StyleSheet } from "react-native";
import Video from "react-native-video";
const MovieDetailsScreen = () => {
  const background = require("../../../assets/video/broadchurch.mp4");
  return (
    <View style={styles.container}>
      {/* <Video source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }} /> */}
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
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default MovieDetailsScreen;
