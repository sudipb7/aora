import { View, Text } from "react-native";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${titleStyles}`}>
        {title}
      </Text>
      <Text className="text-gray-100 text-center font-pregular text-sm">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
