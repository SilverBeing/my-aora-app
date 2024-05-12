import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { avatar3 } from "../../assets/images";
import EmptyState from "../../components/EmptyState";
import VideoThumbnail from "../../components/VideoThumbnail";
import { useUserContext } from "../../providers/UserProvider";
const Profile = () => {
  const { setUser } = useUserContext();
  return (
    <SafeAreaView className=" bg-primary flex-1">
      <FlatList
        ListHeaderComponent={() => (
          <View className=" mt-10 px-6">
            <TouchableOpacity
              onPress={() => setUser(false)}
              className=" w-max ml-auto"
            >
              <MaterialIcons name="logout" size={24} color="#FF5B5B" />
            </TouchableOpacity>
            <View className=" items-center">
              <Image
                source={avatar3}
                resizeMode="contain"
                className=" w-[56px] h-[56px] mb-4"
              />
              <Text className=" font-psemibold mb-2 text-lg text-white text-center">
                Silver Idahosa
              </Text>
              <View className=" flex-row  ">
                <View className=" items-center mr-4">
                  <Text className=" text-[20px] text-white font-psemibold ">
                    10
                  </Text>
                  <Text className=" text-center text-pregular text-sm text-[#CDCDE0]">
                    Posts
                  </Text>
                </View>
                <View className=" items-center">
                  <Text className=" text-[20px] text-white font-psemibold ">
                    1.2k
                  </Text>
                  <Text className=" text-pregular text-sm text-[#CDCDE0]">
                    Views
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        data={[]}
        renderItem={({ item }) => <VideoThumbnail title={item.title} />}
        ListEmptyComponent={() => (
          <EmptyState
            title="Go to Explore"
            link="home"
            message="No video found for this profile"
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Profile;
