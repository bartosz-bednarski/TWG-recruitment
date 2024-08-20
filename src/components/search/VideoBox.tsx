import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const VideoBox: React.FC<{
  title: string;
  date: string;
  image: string;
  channel: string;
  navigation: any;
  id: string;
}> = ({ title, date, image, channel, navigation, id }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("movieDetails", { id })}
    >
      <Image
        style={styles.coverImage}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.channel}>{channel}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {date.slice(0, date.indexOf("T")).replaceAll("-", ".")}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  coverImage: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  channel: {
    marginTop: 16,
    marginBottom: 12,
    fontSize: 12,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
  },
  title: {
    fontFamily: "Poppins-medium",
    fontWeight: "500",
    fontSize: 12,
    color: "rgba(43, 45, 66, 1)",
    marginBottom: 2,
  },
  date: {
    width: "100%",
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    fontSize: 10,
    color: "rgba(43, 45, 66, 1)",
    textAlign: "right",
  },
});
export default VideoBox;
