import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Create from "../../screens/tabs/Create";
import Profile from "../../screens/tabs/Profile";
import Saved from "../../screens/tabs/Saved";
import HomeNavigation from "./HomeNavigation";
export default function TabsNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      barStyle={{ backgroundColor: "black" }}
      tabBarStyle={{ backgroundColor: "black" }}
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          height: 68,
          backgroundColor: "#161622",
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontWeight: "bold",
          fontSize: 16,
          textTransform: "capitalize",
        },

        sceneContainerStyle: { backgroundColor: "black" },

        transitionSpec: {
          open: { animation: "timing", config: { duration: 300 } },
          close: { animation: "timing", config: { duration: 250 } },
        },
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: {
          backgroundColor: "#144",
          margin: 0,
        },
        tabBarIcon: ({ size, color, focused }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "create") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          }
          if (route.name === "profile") {
            iconName = focused ? "people-circle" : "people-circle-outline";
          }
          if (route.name === "saved") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="home"
        component={HomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen name="create" component={Create} />
      <Tabs.Screen name="profile" component={Profile} />
      <Tabs.Screen name="saved" component={Saved} />
    </Tabs.Navigator>
  );
}
