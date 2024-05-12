import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/tabs/Home";
import Search from "../../screens/tabs/Search";

export default function HomeNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: { animation: "timing", config: { duration: 300 } },
          close: { animation: "timing", config: { duration: 250 } },
        },
        // cardStyleInterpolator: forSlide,
      }}
    >
      <Stack.Screen name="homepage" component={Home} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
}
