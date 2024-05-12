import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import SearchField from "../../components/SearchField";
import VideoThumbnail from "../../components/VideoThumbnail";
import { data } from "../../constants";

export default function Search({ route }) {
  const { query } = route.params;
  console.log(query);
  const searched = data.filter((videos) =>
    videos.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log(searched);

  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className=" mt-[50px] ">
        <FlatList
          ListHeaderComponent={() => (
            <View className="px-6">
              <View className=" space-y-1 mb-7">
                <Text className=" text-[#CDCDE0] font-pmedium text-sm ">
                  Search Results
                </Text>
                <Text className=" text-white tracking-[-1px] font-psemibold text-2xl">
                  {query}
                </Text>
              </View>
              <SearchField />
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
          data={searched}
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
