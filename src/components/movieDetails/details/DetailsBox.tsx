import { StyleSheet, View } from "react-native";
import Desciption from "./Description";

const DetailsBox: React.FC<{ description: string }> = ({ description }) => {
  return (
    <View style={styles.box}>
      <Desciption description={description} />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    marginTop: 16,
  },
});
export default DetailsBox;
