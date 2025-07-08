import { Text, TouchableOpacity, View } from "react-native";

export default function Topic({
  //topic{id, categoryId, title, description, color, createdAt, updatedAt}
  topic,
  category,
  cardsNum = 0 ,
  onPress,
}) {
  const [bgColor, textColor] = category
    ? category.color.split(" ")
    : [null, null];

  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 shadow-sm"
    >
      <View className="flex-row items-center justify-between mb-3">
        <View
          className={"px-3 py-1 rounded-full"}
          style={{ backgroundColor: category.color }}
        >
          <Text className={"text-xs font-medium text-white"}>{category.title}</Text>
        </View>
      </View>

      <Text className="text-base font-semibold text-gray-800 mb-2">
        {topic.title}
      </Text>
      <View className="flex-row items-center">
        <Text className="text-sm text-gray-600">created at : {topic.createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
}
