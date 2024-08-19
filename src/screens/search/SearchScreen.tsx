import { View, Text, StyleSheet } from "react-native";

const SearchScreen: React.FC = () => {
  return (
    <View style={Style.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
export default SearchScreen;
