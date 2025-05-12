import Header from "@/components/header";
import MediaList from "@/components/media-list";
import { StatusBar, View } from "react-native";

export default function Index() {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" // atau 'dark-content' tergantung warna background kamu
      />
      <Header />
      <MediaList />
    </View>
  );
}
