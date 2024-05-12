import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import SearchField from "../../components/SearchField";
import VideoThumbnail from "../../components/VideoThumbnail";
import { data } from "../../constants";


export default function Saved() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className=" mt-[50px] ">
        <FlatList
          ListHeaderComponent={() => (
            <View className="px-6">
              <View className=" space-y-1 mb-7">
                <Text className=" text-[#CDCDE0] tracking-[-1px] font-psemibold text-2xl">
                  Saved Videos
                </Text>
              </View>
              <SearchField link="saved" />
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              link="homepage"
              title="Back to Explore"
              message="Video does not exist"
            />
          )}
          keyExtractor={(item) => item.id}
          data={[...data].slice(3, 7)}
          renderItem={({ item }) => (
            <VideoThumbnail
              title={item.title}
              author={item.author}
              profileImage={item.profileImage}
              videoImage={item.videoImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
