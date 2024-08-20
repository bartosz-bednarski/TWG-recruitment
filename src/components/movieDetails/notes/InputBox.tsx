import { StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../../../utils/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
const InputBox: React.FC<{ videoId: string; setNewNote: () => void }> = ({
  videoId,
  setNewNote,
}) => {
  const [textInput, setTextInput] = useState("");
  const submitHandler = async () => {
    const value = await AsyncStorage.getItem(videoId);
    if (value !== null) {
      await AsyncStorage.setItem(videoId, `${value}|*#|${textInput}`);
    } else {
      await AsyncStorage.setItem(videoId, textInput);
    }
    setTextInput("");
    setNewNote();
  };
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter notes..."
        onChangeText={(e) => setTextInput(e)}
        value={textInput}
      />
      <CustomButton title="Add note" onPress={() => submitHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    gap: 16,
    paddingVertical: 10,
  },
  textInput: {
    width: "100%",
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(200, 200, 200, 1)",
    padding: 6,
  },
});

export default InputBox;
