import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cards, logo, path } from "../../assets/images";
import CustomButton from "../../components/ui/CustomButton";
const Welcome = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <SafeAreaView className=" flex-1 bg-primary  ">
      <View className=" items-center px-6 min-h-[90vh]  justify-center ">
        <Image source={logo} resizeMode="contain" className=" w-[115px]" />
        <View className=" w-full ">
          <Image
            source={cards}
            resizeMode="contain"
            className=" w-full  mx-auto h-[298px] self-start  "
          />
        </View>
        <View className=" max-w-[333px] mx-auto mt-3 tracking-tighter">
          <Text className=" text-center text-white text-3xl font-psemibold">
            Discover Endless Possibilities with{" "}
            <Text className=" text-secondary-100">Aora</Text>
          </Text>
          <Image
            source={path}
            resizeMode="contain"
            className=" absolute right-0 bottom-[-15px] w-[65px]"
          />
        </View>
        <Text className="max-w-[333px] mx-auto mt-3  mb-5 text-sm font-pregular text-center text-white">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>
        <CustomButton
          title="Continue with Email"
          handlePress={() => nav.navigate("sign-up")}
        />
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
