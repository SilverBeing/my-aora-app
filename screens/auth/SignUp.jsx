import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { logo } from "../../assets/images";
import CustomButton from "../../components/ui/CustomButton";
import FormField from "../../components/ui/FormField";
const SignUp = () => {
  const [reveal, setReveal] = useState(true);
  const nav = useNavigation();
  return (
    <SafeAreaView className=" bg-primary px-6   flex-1">
      <View className=" min-h-[88vh] justify-center">
        <Image source={logo} resizeMode="contain" className=" w-[115px]" />
        <View className=" space-y-5">
          <Text className=" font-psemibold text-2xl text-white mb-9">
            Sign up
          </Text>
          <FormField label="Username" placeholder="Your unique username" />
          <FormField label="Email" placeholder="Your email address" />
          <FormField
            label="Password"
            reveal={reveal}
            handleReveal={() => setReveal(!reveal)}
            placeholder="Your unique username"
          />
          <View className=" mt-5">
            <CustomButton title="Sign Up" />
            <View className=" flex-row items-center justify-center mt-5 ">
              <Text className="justify-center  font-pregular text-center text-white text-sm">
                Already have an account?{" "}
              </Text>
              <Pressable onPress={() => nav.navigate("sign-in")}>
                <Text className=" text-sm font-pregular text-secondary-100">
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
