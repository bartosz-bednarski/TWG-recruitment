import { ScrollView, StyleSheet, Text, View } from "react-native";
import NoteItem from "./NoteItem";
import InputBox from "./InputBox";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const NotesBox: React.FC<{ videoId: string }> = ({ videoId }) => {
  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const value = await AsyncStorage.getItem(videoId);
      if (value !== null) {
        const notesToArray = value.split("|*#|");
        setNotes(notesToArray);
      }
    };
    getNotes();
  }, [newNote]);
  return (
    <View style={styles.container}>
      <ScrollView style={{ height: 170 }}>
        {notes.length > 0 &&
          notes.map((item, index) => <NoteItem key={index} content={item} />)}
      </ScrollView>
      <InputBox videoId={videoId} setNewNote={() => setNewNote(!newNote)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  noteBox: {
    flexDirection: "column",
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(200, 200, 200, 1)",
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 19,
  },
});
export default NotesBox;
