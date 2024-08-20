import { Image, StyleSheet, Text, View } from "react-native";

const VideoBox: React.FC<{
  title: string;
  date: string;
  image: string;
  id: string;
}> = ({ title, date, image, id }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.coverImage}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {date.slice(0, date.indexOf("T")).replaceAll("-", ".")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    flexDirection: "column",
    marginRight: 19,
  },
  coverImage: {
    width: 180,
    height: 112,
    borderRadius: 16,
  },
  title: {
    fontFamily: "Poppins-medium",
    fontWeight: "500",
    fontSize: 12,
    color: "rgba(43, 45, 66, 1)",
    marginTop: 5,
    marginBottom: 2,
  },
  date: {
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    fontSize: 10,
    color: "rgba(43, 45, 66, 1)",
    textAlign: "right",
  },
});
export default VideoBox;
