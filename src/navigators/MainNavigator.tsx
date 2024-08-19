import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/main/MainScreen";

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={MainScreen} name="mainNav" />
    </Stack.Navigator>
  );
};
export default MainNavigator;
