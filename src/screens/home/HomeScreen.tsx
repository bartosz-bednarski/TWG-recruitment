import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../components/home/SearchBar";
import CategoryBox from "../../components/home/CategoryBox";

const HomeScreen: React.FC = () => {
  return (
    <View style={Style.container}>
      <SearchBar />
      <ScrollView>
        <CategoryBox title="React Native" keyword="react native" />
        <CategoryBox title="React" keyword="react.js" />
        <CategoryBox title="Typescript" keyword="typescript" />
        <CategoryBox title="JavaScript" keyword="JavaScript" />
      </ScrollView>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
});
export default HomeScreen;
