import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";

import SignUp from "../../screens/auth/SignUp";
import Welcome from "../../screens/auth/Welcome";
export default function AuthNavigator() {
  const forSlide = ({ current, next, layouts }) => {
    return {
      containerStyle: {
        backgroundColor: "#161622",
      },
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                layouts.screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                layouts.screen.width * -0.3,
              ],
            }),
          },
        ],
      },
    };
  };

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
        cardStyleInterpolator: forSlide,
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="sign-up" component={SignUp} />
      <Stack.Screen name="sign-in" component={Login} />
    </Stack.Navigator>
  );
}
