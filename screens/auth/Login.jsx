import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../assets/images/images";
import CustomButton from "../../components/ui/CustomButton";
import FormField from "../../components/ui/FormField";
import { useUserContext } from "../../providers/UserProvider";
const Login = () => {
  const [reveal, setReveal] = useState(false);
  const nav = useNavigation();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useUserContext();
  const handleLogin = () => {
    setisLoading(true);
    // Set isLoading to true immediately
    setTimeout(() => {
      // This code block will execute after 2000 milliseconds
      if (data.email && data.password) {
        setUser(true);
        setisLoading(false); // If email and password are provided, setUser(true)
      } else {
        setisLoading(false);
      }
    }, 2000);
  };
  return (
    <SafeAreaView className=" flex-1 bg-primary px-6">
      <View className=" min-h-[88vh] justify-center">
        <Image
          source={images.logo}
          resizeMode="contain"
          className=" w-[115px]"
        />
        <View className=" space-y-5">
          <Text className=" font-psemibold text-2xl text-white mb-9">
            Sign in
          </Text>
          <FormField
            value={data.email}
            handleChangeText={(newText) =>
              setData({
                ...data,
                email: newText,
              })
            }
            label="Email"
            placeholder="Your email address"
          />
          <FormField
            label="Password"
            reveal={reveal}
            handleReveal={() => setReveal(!reveal)}
            placeholder="Your unique username"
            handleChangeText={(newText) =>
              setData({
                ...data,
                password: newText,
              })
            }
          />
          <Text className=" ml-auto font-pregular t text-white text-sm">
            Forgot password
          </Text>
          <View className=" mt-5">
            <CustomButton
              title="Sign In"
              isLoading={isLoading}
              handlePress={handleLogin}
            />
            <View className=" flex-row items-center justify-center mt-5 ">
              <Text className="justify-center  font-pregular text-center text-white text-sm">
                Don't have an account{" "}
              </Text>
              <Pressable onPress={() => nav.navigate("sign-up")}>
                <Text className=" text-sm font-pregular text-secondary-100">
                  Signup
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
