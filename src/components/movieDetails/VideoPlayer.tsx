import { Image, StyleSheet, Text } from "react-native";
import Video from "react-native-video";
import Constants from "expo-constants";
const VideoPlayer: React.FC<{ url: string }> = (url) => {
  console.log(Constants);
  return (
    <Image
      source={{
        uri: `${url}`,
      }}
      style={{ width: "100%", height: 280 }}
    />
  );
};

export default VideoPlayer;
