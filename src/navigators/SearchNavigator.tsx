import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/search/SearchScreen";
import MovieDetailsScreen from "../screens/search/movieDetails/MovieDetailsScreen";

const SearchNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={SearchScreen} name="searchStack" />
      <Stack.Screen component={MovieDetailsScreen} name="movieDetails" />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
