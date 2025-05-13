import { Adzan } from "@/types";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

type Props = Adzan;

export default function MediaListItem({
  title,
  muadzin,
}: Props) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Image
        source={require("@/assets/images/saudi-flag.png")}
        style={{ width: 40, height: 40, borderRadius: 10 }}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <Text style={{}}>{muadzin}</Text>
      </View>
    </TouchableOpacity>
  );
}
