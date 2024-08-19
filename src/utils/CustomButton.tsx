import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton: React.FC<{ onPress: () => void; title: string }> = ({
  onPress,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.box}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(43, 45, 66, 1)",
    borderRadius: 12,
    width: "100%",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  title: {
    color: "white",
    fontFamily: "Poppins-regular",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default CustomButton;
