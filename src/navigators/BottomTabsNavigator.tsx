import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/search/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
const BottomTabsNavigator: React.FC = () => {
  const BottomTabs = createBottomTabNavigator();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(141, 153, 174, 1)",
          padding: 10,
          height: 72,
        },
        tabBarActiveTintColor: "rgba(43, 45, 66, 1)",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Poppins-regular",
          fontWeight: "400",
        },
      }}
    >
      <BottomTabs.Screen
        component={HomeScreen}
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={32} />
          ),
        }}
      />
      <BottomTabs.Screen
        component={SearchScreen}
        name="Search"
        options={(route) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={32} />
          ),
        })}
      />
    </BottomTabs.Navigator>
  );
};
export default BottomTabsNavigator;
