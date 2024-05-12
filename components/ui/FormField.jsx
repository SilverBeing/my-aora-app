import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FormField({
  reveal,
  label,
  handleChangeText,
  value,
  placeholder,
  handleReveal,
  icon,
}) {
  return (
    <View className=" w-full space-y-3 mb-4  ">
      <Text className=" font-pmedium text-base text-[#CDCDE0] ">{label}</Text>
      <View className=" h-[58px]  items-center bg-[#1E1E2D] border border-solid  border-[#232533] rounded-lg focus:border-secondary-100 flex-row justify-between">
        <TextInput
          secureTextEntry={label === "Password" && reveal ? true : false}
          placeholderTextColor="rgba(255,255,255,0.2)"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          className=" h-full flex-1 font-psemibold text-base px-5 text-white"
        />
        {label === "Password" && (
          <TouchableOpacity
            className="mr-4"
            activeOpacity={0.7}
            onPress={handleReveal}
          >
            <Ionicons
              name={reveal ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
