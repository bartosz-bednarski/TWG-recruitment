import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchBar: React.FC<{
  focus: boolean;
  onChangeText: (e: string) => void;
  value: string;
}> = ({ focus, onChangeText, value }) => {
  return (
    <View style={styles.searchBarBox}>
      <Ionicons name="search-outline" color="rgba(43, 45, 66, 1)" size={24} />
      <TextInput
        placeholder="Search videos"
        style={styles.textInput}
        autoFocus={focus}
        onChangeText={(e) => onChangeText(e)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBox: {
    marginTop: 40,
    flexDirection: "row",
    height: 44,
    width: "100%",
    borderWidth: 2,
    borderColor: "rgba(43, 45, 66, 1)",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 12,
  },
  textInput: {
    width: "100%",
  },
});
export default SearchBar;
