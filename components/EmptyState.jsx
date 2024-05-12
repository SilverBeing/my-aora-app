import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import {empty} from "../assets/images"
import CustomButton from "./ui/CustomButton";
export default function EmptyState({ message, link, title }) {
  const nav = useNavigation();
  return (
    <View className=" items-center px-6">
      <Image
        source={empty}
        resizeMode="contain"
        className=" w-[270px] h-[216px]"
      />
      <View className=" mb-8">
        <Text className=" text-center  font-pmedium text-sm text-[#CDCDE0]">
          No Videos Found
        </Text>
        <Text className=" text-[20px] font-psemibold text-center text-white">
          {message}
        </Text>
      </View>
      <CustomButton title={title} handlePress={() => nav.navigate(link)} />
    </View>
  );
}
