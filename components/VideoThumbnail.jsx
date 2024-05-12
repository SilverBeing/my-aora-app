import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";

export default function VideoThumbnail({
  profileImage,
  title,
  author,
  videoImage,
}) {
  return (
    <View className=" mt-5 px-6">
      <View className=" flex-row items-center justify-between ">
        <View className=" flex-row gap-3  items-center">
          <Image
            source={profileImage}
            className=" w-[46px] bg-black-100 self-start h-[46px]"
            resizeMode="contain"
          />
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className=" text-sm font-psemibold text-white max-w-[350px]   "
            >
              {title}
            </Text>
            <Text className=" text-[12px]   font-pregular text-[#CDCDE0]">
              {author}
            </Text>
          </View>
        </View>
        <Entypo name="dots-three-vertical" color="white" size={24} />
      </View>
      <View className=" items-center justify-center mt-3">
        <Image
          source={videoImage}
          resizeMode="cover"
          className=" w-full h-[256px] rounded-[10px]"
        />
        <View className=" w-[40px] h-[40px] rounded-full bg-[#FFFFFF66] items-center justify-center absolute  ">
          <Ionicons name="play" color="white" size={24} />
        </View>
      </View>
    </View>
  );
}
