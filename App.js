import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Fade } from "./examples/Fade/Fade";
import { Translation } from "./examples/Translation/Translation";
import { Scale } from "./examples/Scale/Scale";
import { useState } from "react";

export default function App() {
  const [translationLayoutPosition, setTranslationLayoutPosition] = useState(
    {}
  );
  console.log("translationLayoutPosition", translationLayoutPosition.style);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Fade onSetTranslationLayoutPosition={setTranslationLayoutPosition} />
        {translationLayoutPosition.y !== undefined && (
          <Translation translationLayoutPosition={translationLayoutPosition} />
        )}
      </View>

      <Scale />
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
  box: {
    position: "relative",
    height: 280,
  },
  translationBox: {
    position: "relative",
    width: 100,
    height: 100,
    marginTop: 40,
  },
});
