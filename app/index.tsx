import Header from "@/components/header";
import MediaList from "@/components/media-list";
import { useResponsiveHeight } from "@/utils/use-responsive-height";
import { StatusBar, View } from "react-native";

export default function Index() {
  const headerHeight = useResponsiveHeight(30);
  const mediaListHeight = useResponsiveHeight(70);

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" // atau 'dark-content' tergantung warna background kamu
      />
      <Header height={headerHeight} />
      <MediaList height={mediaListHeight} />
    </View>
  );
}
