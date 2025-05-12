import { ImageBackground } from "react-native";

export default function Header() {
  const backgroundImage = require("@/assets/images/islamic-background.png");

  return (
    <ImageBackground
      style={{
        width: "100%",
        height: 300,
      }}
      source={backgroundImage}
    >
    </ImageBackground>
  );
}
