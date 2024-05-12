import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserContext } from "../providers/UserProvider";
import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";

export default function RootNavigation() {
  const { user } = useUserContext();
  const Stack = createStackNavigator();
  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
      >
        {!user ? (
          <Stack.Screen name="authNavigator" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="tabsNavigator" component={TabsNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
