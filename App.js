import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Fade } from "./examples/Fade/Fade";
import { Translation } from "./examples/Translation/Translation";
import { useState } from "react";

export default function App() {
  const [translationLayoutPosition, setTranslationLayoutPosition] = useState(
    {}
  );
  return (
    <View style={styles.container}>
      {console.log("translationLayoutPosition", translationLayoutPosition)}
      <Fade onSetTranslationLayoutPosition={setTranslationLayoutPosition} />
      <Translation translationLayoutPosition={translationLayoutPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    position: "relative",
  },
});
