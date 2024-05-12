import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import {trending1, trending2, trending3, img, img2} from "../assets/images"

export default function TrendingVideos() {
  const trendingVideos = [trending1, trending2, trending3, img, img2];
  const [active, setActive] = useState(trendingVideos[1]);
  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActive(viewableItems[0].key);
    }
  };
  const zoomIn = {
    0: {
      scale: 0.9,
    },
    1: {
      scale: 1,
    },
  };

  const zoomOut = {
    0: {
      scale: 1,
    },
    1: {
      scale: 0.9,
    },
  };
  const increaseWidth = {
    0: {
      width: 10,
    },
    1: {
      width: 17,
    },
  };
  const decreaseWidth = {
    0: {
      width: 17,
    },
    1: {
      width: 10,
    },
  };
  return (
    <View className="mt-10 ">
      <Text className=" mb-5 px-6 text-[#CDCDE0] text-sm font-pregular">
        Trending Videos
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
        keyExtractor={(_, index) => index}
        data={trendingVideos}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 170 }}
        renderItem={({ item, index }) => (
          <Animatable.View
            animation={active === index ? zoomIn : zoomOut}
            className=" items-center justify-center mr-5 w-[258px] h-[356px] "
          >
            <Image
              source={item}
              className="  shadow-black/40 h-full w-full   drop-shadow-lg rounded-[14px]"
              resizeMode="cover"
            />
            <View className=" w-[40px] h-[40px] rounded-full bg-[#FFFFFF66] items-center justify-center absolute  ">
              <Ionicons name="play" color="white" size={24} />
            </View>
          </Animatable.View>
        )}
      />
      <View className=" justify-center gap-2 flex-row items-center mt-5">
        {[0, 1, 2, 3, 4].map((index) => (
          <Animatable.View
            animation={active === index ? increaseWidth : decreaseWidth}
            duration={500}
            key={index}
            className={`${
              active !== index
                ? " w-[7px] h-[7px] bg-[#7B7B8B] "
                : " w-[17px] h-[7px]  bg-secondary-100"
            } rounded-full`}
          ></Animatable.View>
        ))}
      </View>
    </View>
  );
}
