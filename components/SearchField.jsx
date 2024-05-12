import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchField({ link = "search" }) {
  const [query, setQuery] = useState("");
  const nav = useNavigation();

  return (
    <View className=" h-[58px]  items-center bg-[#1E1E2D] border border-solid  border-[#232533] rounded-lg focus:border-secondary-100 flex-row justify-between">
      <TextInput
        placeholderTextColor="#CDCDE0"
        value={query}
        placeholder={"Search for a video topic"}
        onChangeText={(newText) => setQuery(newText)}
        className=" h-full flex-1 font-psemibold text-base px-5 text-white"
      />

      <TouchableOpacity
        onPress={() =>
          nav.navigate(link, {
            query,
          })
        }
        className="mr-4 h-full justify-center w-[40px] items-center"
        activeOpacity={0.7}
      >
        <Ionicons name="search" size={24} color="#CDCDE0" />
      </TouchableOpacity>
    </View>
  );
}
