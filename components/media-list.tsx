import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

export default function MediaList() {
  const backgroundImage = require("@/assets/images/mosque-sketch.png");
  const mediaList = [
    { adzan: "adzan 1", muadzin: "sheikh mu ad" },
    { adzan: "adzan 2", muadzin: "sheikh mu ad" },
    { adzan: "adzan 3", muadzin: "sheikh mu ad" },
  ];

  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "75%",
      }}
      imageStyle={{
        opacity: 0.5,
      }}
      source={backgroundImage}
    >
      <FlatList
        data={mediaList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderBottomWidth: 1,
              borderBottomColor: "gray",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {item.adzan}
            </Text>
            <Text
              style={{
                
              }}
            >{item.muadzin}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
