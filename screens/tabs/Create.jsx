import * as DocumentPicker from "expo-document-picker";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { upload } from "../../assets/icons";
import CustomButton from "../../components/ui/CustomButton";
import FormField from "../../components/ui/FormField";
const Create = () => {
  const fileUpload= async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectType === "image"
          ? ["image/png", "image/jpg"]
          : ["video/mp4", "video/gif"],
    });
    console.log(result);
  };

  return (
    <SafeAreaView className=" bg-primary flex-1">
      <View className=" mt-7 px-6 min-h-[85vh] justify-center">
        <Text className=" font-psemibold text-[22px] text-white mb-7 ">
          Upload Video
        </Text>
        <View className=" ">
          <FormField
            label="Video Title"
            placeholder="Give your video a catchy title..."
          />
          <View className=" mb-6">
            <Text className=" font-pmedium text-base mb-2 text-[#CDCDE0]">
              Upload video
            </Text>
            <View className=" w-full h-[149px] items-center justify-center bg-[#1E1E2D] border border-solid border-[#222432] rounded-md">
              <TouchableOpacity
                onPress={() => fileUpload("video")}
                className=" rounded-md w-[50px] h-[50px] border-dashed border border-[#FF90014F] items-center justify-center"
              >
                <Image
                  source={upload}
                  className=" w-6 h-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className=" mb-6">
            <Text className=" mb-2 font-pmedium text-base text-[#CDCDE0]">
              Thumbnail Image
            </Text>
            <View className=" w-full h-[58px] items-center justify-center bg-[#1E1E2D] border border-solid border-[#222432] rounded-md">
              <TouchableOpacity
                onPress={() => fileUpload("image")}
                className="  items-center justify-center flex-row"
              >
                <Image
                  source={upload}
                  className=" w-6 h-6"
                  resizeMode="contain"
                />
                <Text className=" text-sm font-pmedium text-[#CDCDE0]">
                  {""} Choose a file
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FormField
            label="AI Prompt"
            placeholder="The AI prompt of your video..."
          />
          <CustomButton title="Submit & Publish" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Create;
