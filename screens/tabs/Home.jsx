import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../../components/HeaderComponent";
import TrendingVideos from "../../components/TrendingVideos";
import VideoThumbnail from "../../components/VideoThumbnail";
import { data } from "../../constants";
const Home = () => {
  return (
    <SafeAreaView className=" bg-primary flex-1 ">
      <FlatList
        ListHeaderComponentStyle={{ marginTop: 50 }}
        data={data}
        ListHeaderComponent={() => (
          <View>
            <View className=" px-6">
              <HeaderComponent />
            </View>

            <TrendingVideos />
          </View>
        )}
        renderItem={({ item }) => (
          <VideoThumbnail
            author={item.author}
            title={item.title}
            profileImage={item.profileImage}
            videoImage={item.videoImage}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Home;
