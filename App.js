import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { Fade } from "./examples/Fade/Fade";
import { Translation } from "./examples/Translation/Translation";
import { Scale } from "./examples/Scale/Scale";
import { WidthHeight } from "./examples/WidthHeight/WidthHeight";
import { Color } from "./examples/Color/Color";
import { Rotate } from "./examples/Rotate/Rotate";
import { WidthHeightPercentage } from "./examples/WidthHeightPercentage/WidthHeightPercentage";

export default function App() {
  const [translationLayoutPosition, setTranslationLayoutPosition] = useState(
    {}
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <Fade
              onSetTranslationLayoutPosition={setTranslationLayoutPosition}
            />
            {translationLayoutPosition.y !== undefined && (
              <Translation
                translationLayoutPosition={translationLayoutPosition}
              />
            )}
          </View>
          <Scale />
          <WidthHeight />
          <Color />
          <Rotate />
          <WidthHeightPercentage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
    position: "relative",
    marginBottom: 40,

    padding: 20,
    flex: 1,
  },
  box: {
    position: "relative",
    height: 280,
    // marginRight: 40,
  },
});
