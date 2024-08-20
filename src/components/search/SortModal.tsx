import { StyleSheet, Text, View } from "react-native";
import ListItemModal from "./ListItemModal";
import { useState } from "react";
import CustomButton from "../../utils/CustomButton";

const SortModal: React.FC<{
  onPress: (title: string, order: string) => void;
}> = ({ onPress }) => {
  const [selectedValue, setSelectedValue] = useState({
    title: "Upload date: latest",
    order: "relevance",
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Sort records by:</Text>
        <View style={styles.list}>
          <ListItemModal
            value="Upload date: latest"
            order="relevance"
            selectedValue={selectedValue}
            onPress={(value, order) =>
              setSelectedValue({ title: value, order: order })
            }
          />
          <ListItemModal
            value="Upload date: oldest"
            order="date"
            selectedValue={selectedValue}
            onPress={(value, order) =>
              setSelectedValue({ title: value, order: order })
            }
          />
          <ListItemModal
            value="Most popular"
            order="viewCount"
            selectedValue={selectedValue}
            onPress={(value, order) =>
              setSelectedValue({ title: value, order: order })
            }
          />
        </View>
        <CustomButton
          title="Confirm"
          onPress={() => onPress(selectedValue.title, selectedValue.order)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "rgba(141, 153, 174, 1)",
    width: "80%",
    borderRadius: 25,
    padding: 31,
    gap: 24,
  },
  header: {
    fontFamily: "Poppins-medium",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  list: {
    gap: 24,
    marginBottom: 128,
  },
});

export default SortModal;
