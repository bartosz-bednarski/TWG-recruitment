import { ScrollView, StyleSheet, View } from "react-native";
import Desciption from "./Description";
import StatisticsBox from "./StatisticsBox";

const DetailsBox: React.FC<{
  description: string;
  views: string;
  likes: string;
}> = ({ description, views, likes }) => {
  return (
    <ScrollView style={styles.box}>
      <Desciption description={description} />
      <StatisticsBox views={views} likes={likes} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    marginTop: 16,
  },
});
export default DetailsBox;
