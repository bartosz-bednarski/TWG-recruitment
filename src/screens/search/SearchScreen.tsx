import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../components/search/SearchBar";
import ResultsFound from "../../components/search/ResultsFound";
import { useEffect, useState } from "react";
import VideoBox from "../../components/search/VideoBox";
import SortBy from "../../components/search/SortBy";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const SearchScreen: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const [textInput, setTextInput] = useState("");
  const [displayDataFromCategory, setDisplayDataFromCategory] = useState(false);
  const [dataFromCategory, setDataFromCategory] = useState([]);
  useEffect(() => {
    if (route.params?.title !== undefined) {
      setTextInput(route.params.title);
      route.params.title = undefined;
    }
    if (textInput !== "") {
      const getVideos = async () => {
        const URL =
          "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&q=" +
          textInput +
          "&key=" +
          API_KEY;
        const res = await fetch(URL, {
          method: "GET",
        });
        const data = await res.json();
        setDataFromCategory(data.items);
      };
      getVideos();
      setDisplayDataFromCategory(true);
    }
  }, [textInput, route]);

  console.log(textInput);
  console.log(route.params?.focus ? true : false);
  return (
    <View style={styles.container}>
      <SearchBar
        focus={route.params?.focus ? true : false}
        onChangeText={(e) => setTextInput(e)}
        value={textInput}
      />
      {displayDataFromCategory && (
        <>
          <ResultsFound title={textInput} number={dataFromCategory.length} />
          <SortBy />
          <ScrollView>
            {dataFromCategory.map((item) => (
              <VideoBox
                navigation={navigation}
                key={item.etag}
                title={item.snippet.title}
                date={item.snippet.publishTime}
                image={item.snippet.thumbnails.high.url}
                channel={item.snippet.channelTitle}
              />
            ))}
          </ScrollView>
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
    paddingHorizontal: 24,
  },
});
export default SearchScreen;
