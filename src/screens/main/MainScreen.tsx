import { View, Text, StyleSheet } from "react-native";

const MainScreen: React.FC = () => {
  return (
    <View style={Style.container}>
      <Text>Main screen</Text>
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "red",
  },
});
export default MainScreen;
