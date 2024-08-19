import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../components/home/SearchBar";
import CategoryBox from "../../components/home/CategoryBox";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={Style.container}>
      <SearchBar navigation={navigation} />
      <ScrollView>
        <CategoryBox
          title="React Native"
          keyword="react native"
          navigation={navigation}
        />
        <CategoryBox title="React" keyword="react.js" navigation={navigation} />
        <CategoryBox
          title="Typescript"
          keyword="typescript"
          navigation={navigation}
        />
        <CategoryBox
          title="JavaScript"
          keyword="JavaScript"
          navigation={navigation}
        />
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
