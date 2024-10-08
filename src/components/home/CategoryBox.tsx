import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import VideoBox from "./VideoBox";
import { useEffect, useState } from "react";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const CategoryBox: React.FC<{
  title: string;
  keyword: string;
  navigation: any;
}> = ({ title, keyword, navigation }) => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const URL =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=" +
        keyword +
        "&key=" +
        API_KEY;
      const res = await fetch(URL, {
        method: "GET",
      });
      const data = await res.json();
      setFetchedData(data.items);
    };
    getVideos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.header}>{title}</Text>
        <Pressable
          onPress={() =>
            navigation.navigate("bottomTabsNav", {
              screen: "Search",
              params: { keyword: keyword, title: title },
            })
          }
        >
          <Text style={styles.link}>Show more</Text>
        </Pressable>
      </View>
      <ScrollView horizontal={true}>
        {fetchedData.map((item) => (
          <VideoBox
            key={item.etag}
            id={item.id.videoId}
            title={item.snippet.title}
            date={item.snippet.publishTime}
            image={item.snippet.thumbnails.medium.url}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingLeft: 24,
    width: "100%",
    gap: 16,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomColor: "rgba(43, 45, 66, 1)",
    borderBottomWidth: 2,
  },
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 24,
  },
  header: {
    fontSize: 18,
    fontFamily: "Poppins-medium",
    fontWeight: "600",
  },
  link: {
    fontSize: 12,
    fontFamily: "Poppins-medium",
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});

export default CategoryBox;
