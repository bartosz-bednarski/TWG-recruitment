import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
import SearchBar from "../../components/search/SearchBar";
import ResultsFound from "../../components/search/ResultsFound";
import { useEffect, useState } from "react";
import VideoBox from "../../components/search/VideoBox";
import SortBy from "../../components/search/SortBy";
import SortModal from "../../components/search/SortModal";
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const SearchScreen: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const [textInput, setTextInput] = useState("");
  const [displayDataFromCategory, setDisplayDataFromCategory] = useState(false);
  const [dataFromCategory, setDataFromCategory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState({
    title: "Upload date: latest",
    order: "relevance",
  });
  const modalSubmitHandler = (title: string, order: string) => {
    setSortBy({ title: title, order: order });
    setModalVisible(false);
  };
  useEffect(() => {
    if (route.params?.title !== undefined) {
      setTextInput(route.params.title);
      route.params.title = undefined;
    }
    if (textInput !== "") {
      const getVideos = async () => {
        const URL =
          "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5" +
          "&order=" +
          sortBy.order +
          "&type=video&q=" +
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
  }, [textInput, route, sortBy]);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <SortModal onPress={modalSubmitHandler} />
      </Modal>
      <SearchBar
        focus={route.params?.focus ? true : false}
        onChangeText={(e) => setTextInput(e)}
        value={textInput}
      />
      {displayDataFromCategory && (
        <>
          <ResultsFound title={textInput} number={dataFromCategory.length} />
          <SortBy onPress={() => setModalVisible(true)} sortBy={sortBy.title} />
          <ScrollView>
            {dataFromCategory.map((item) => (
              <VideoBox
                navigation={navigation}
                key={item.etag}
                title={item.snippet.title}
                date={item.snippet.publishTime}
                image={item.snippet.thumbnails.high.url}
                channel={item.snippet.channelTitle}
                id={item.id.videoId}
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
