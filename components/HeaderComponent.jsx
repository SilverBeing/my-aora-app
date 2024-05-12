import { Image, Text, View } from "react-native";
import { logoSmall } from "../assets/images";
import SearchField from "./SearchField";
export default function HeaderComponent() {
  return (
    <View>
      <View className=" flex-row mb-4  justify-between items-center">
        <View className=" space-y-1 ">
          <Text className=" text-[#CDCDE0] font-pmedium text-sm ">
            Welcome Back
          </Text>
          <Text className=" text-[#CDCDE0] tracking-[-1px] font-psemibold text-2xl">
            {"Silver Idahosa"}
          </Text>
        </View>
        <Image
          source={logoSmall}
          resizeMode="contain"
          className=" w-[30px] h-[34px]"
        />
      </View>
      <SearchField />
    </View>
  );
}
