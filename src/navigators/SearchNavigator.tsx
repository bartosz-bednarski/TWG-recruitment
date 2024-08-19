import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/search/SearchScreen";

const SearchNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen component={SearchScreen} name="searchNav" />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
