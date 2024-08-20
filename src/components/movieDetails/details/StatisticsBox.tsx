import { Text, View, StyleSheet, Image } from "react-native";

const StatisticsBox: React.FC<{ views: string; likes: string }> = ({
  views,
  likes,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statistics</Text>
      <View style={styles.cardsBox}>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/icons/views.png")}
            width={20}
            height={20}
          />
          <Text style={styles.text}>{views} views</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../../../assets/icons/likes.png")}
            width={20}
            height={20}
          />
          <Text style={styles.text}>{likes} likes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 20,
  },
  header: {
    fontSize: 10,
    fontFamily: "Poppins-medium",
    fontWeight: "700",
    color: "rgba(43, 45, 66, 1)",
  },
  cardsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 8,
    backgroundColor: "rgba(43, 45, 66, 1)",
    flexDirection: "row",
    width: 136,
    height: 32,
    borderRadius: 8,
  },
  text: {
    fontSize: 10,
    fontFamily: "Poppins-medium",
    fontWeight: "600",
    color: "white",
  },
});
export default StatisticsBox;
