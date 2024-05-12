import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  handlePress,
  title,
  otherStyles,
  isLoading,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`${otherStyles} w-full h-[58px] rounded-lg items-center justify-center bg-secondary-100`}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <Text className=" text-primary font-psemibold text-base">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
