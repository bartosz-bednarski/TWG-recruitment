import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Video from "react-native-video";
import VideoPlayer from "../../../components/movieDetails/VideoPlayer";
import { useEffect, useState } from "react";
import { VideoDetailsType } from "../../../types/movieDetails";
import ChannelBox from "../../../components/movieDetails/ChannelBox";
import ButtonsBox from "../../../components/movieDetails/ButtonsBox";
import DetailsBox from "../../../components/movieDetails/details/DetailsBox";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const MovieDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const [videoData, setVideoData] = useState<null | VideoDetailsType>(null);
  useEffect(() => {
    const getVideo = async () => {
      const URL =
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        route.params.id +
        "&key=" +
        API_KEY;
      const res = await fetch(URL, {
        method: "GET",
      });
      const data = await res.json();
      const videoDetailsData: VideoDetailsType = {
        imageUrl: data.items[0].snippet.thumbnails.high.url,
        description: data.items[0].snippet.description,
        channel: data.items[0].snippet.channelTitle,
        videoId: data.items[0].id,
        views: data.items[0].statistics.viewCount,
        likes: data.items[0].statistics.likeCount,
        title: data.items[0].snippet.title,
      };
      setVideoData(videoDetailsData);
    };
    getVideo();
  }, []);
  return (
    <View style={styles.container}>
      {videoData !== null && (
        <>
          <Image
            source={{
              uri: `${videoData.imageUrl}`,
            }}
            style={{ width: "100%", height: 280 }}
          />
          <Text style={styles.title}>{videoData.title}</Text>
          <ChannelBox channel={videoData.channel} />
          <ButtonsBox />
          <DetailsBox description={videoData.description} />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    width: "100%",
    // paddingHorizontal: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
  },
});
export default MovieDetailsScreen;
