import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBarBox}>
        <Ionicons name="search-outline" color="rgba(43, 45, 66, 1)" size={24} />
        <TextInput placeholder="Search videos" />
      </Pressable>
      <Ionicons name="settings-outline" color="rgba(43, 45, 66, 1)" size={26} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 23,
  },
  searchBarBox: {
    flexDirection: "row",
    height: 44,
    width: "88%",
    borderWidth: 2,
    borderColor: "rgba(43, 45, 66, 1)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 12,
  },
});
export default SearchBar;
